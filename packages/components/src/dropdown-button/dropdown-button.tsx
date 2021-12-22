import classnames from "classnames";
import { FC, HTMLProps, MouseEvent, ReactText, useCallback, useEffect, useMemo, useRef, useState } from "react";

import { useOnClickOutside } from "../hooks";
import Icon from "../icon";
import Icons, { IconData } from "../icons";
import classes from "./dropdown-button.module.scss";

/**
 * This method is used to calculate max width of children elements.
 * It aims to get wrapper min width.
 *
 * @param   {HTMLElement | null} parent The parent.
 * @example
 * getMaxChildrenWidth(...)
 * @returns {number}                    The children width
 */
export const getMaxChildrenWidth = (parent?: HTMLElement | null) => {
  if (!parent) return;
  let maxWidth = 0;

  for (let i = 0; i < parent.childNodes.length; i++) {
    const child = parent.childNodes[i];

    const textContent = child.textContent;
    const span = document.createElement("span");
    span.innerText = textContent || "";
    document.body.appendChild(span);
    const w = span.getBoundingClientRect().width;
    document.body.removeChild(span);

    if (w > maxWidth) maxWidth = w;
  }

  return maxWidth;
};

/** Defines overloadable classNames */
export type DropdownButtonClassNames = {
  /**
   * Override wrapper style by creating className.
   */
  wrapper?: HTMLProps<HTMLButtonElement>["className"];
  /**
   * Override item list style by creating className.
   */
  item_list?: HTMLProps<HTMLUListElement>["className"];
  /**
   * Override list item style by creating className.
   */
  item_list_item?: HTMLProps<HTMLLIElement>["className"];
};

/** Defines base DropdownButton props. Meant to be extended. */
interface BaseDropdownButtonProps {
  /**
   * You have to pass the current value to the select
   */
  value?: string;
  /**
   * This is an array of objects containing `value` and `text`.
   * `value` is the value that will be returned after selecting it.
   * `text` is the text that will be shown in select options.
   */
  items: {
    /** The item value */
    value: string;
    /** The item text */
    text: ReactText;
  }[];
  /**
   * @default Icons.arrow_drop_down
   */
  icon?: IconData;
  /**
   * @default 24
   */
  iconSize?: number;
  /**
   * Callback that will be called on value selection.
   *
   * @param {string} nextValue The next value
   */
  onChange?: (nextValue: string) => void;
  /**
   * If `allowEmpty` is set to `true`, it will be visually selected if given `value` is unknown,
   * or empty.
   * If it's set to `false`, the first option will be visually selected.
   *
   * REQUIRED when you want to allow empty value.
   *
   * @default false
   */
  allowEmpty?: boolean;
  /** The override classNames */
  classNames?: DropdownButtonClassNames;
}

/** Defines DropdownButton props when value can be empty */
interface DropdownButtonPropsWithAllowEmpty extends BaseDropdownButtonProps {
  /**
   * If `allowEmpty` is set to `true`, it will be visually selected if given `value` is unknown,
   * or empty.
   * If it's set to `false`, the first option will be visually selected.
   *
   * REQUIRED when you want to allow empty value.
   *
   * @default false
   */
  allowEmpty: true;
  /**
   * Text to show when no value is selected.
   *
   * Must not be defined when `allowEmpty` is `false`.
   */
  placeholder?: string;
}

/** Defines DropdownButton props when value can NOT be empty */
interface DropdownButtonPropsWithoutAllowEmpty extends BaseDropdownButtonProps {
  /**
   * If `allowEmpty` is set to `true`, it will be visually selected if given `value` is unknown,
   * or empty.
   * If it's set to `false`, the first option will be visually selected.
   *
   * REQUIRED when you want to allow empty value.
   *
   * @default false
   */
  allowEmpty?: false;
  /**
   * Text to show when no value is selected.
   *
   * Must not be defined when `allowEmpty` is `false`.
   */
  placeholder?: undefined;
}

/** Defines DropdownButton props. */
export type DropdownButtonProps = DropdownButtonPropsWithAllowEmpty | DropdownButtonPropsWithoutAllowEmpty;

/**
 * A button for selecting from a list of items.
 * A dropdown button lets the user select from a number of items.
 * The button shows the currently selected item as well as an arrow that opens a menu for selecting
 * another item.
 *
 * @param   {DropdownButtonProps} props The props
 * @example
 * <DropdownButton items={[ { value: 1, text: 'One' }, { value: 2, text: 'Two' } ]} />
 * @returns {JSX.Element}               The JSX Element.
 */
export const DropdownButton: FC<DropdownButtonProps> = ({
  allowEmpty = false,
  classNames,
  icon = Icons.arrow_drop_down,
  iconSize = 24,
  items,
  onChange,
  placeholder,
  value,
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [maxW, setMaxW] = useState(0);

  const valueLabel = useMemo(() => value && items.find((item) => item.value === value)?.text, [items, value]);

  const handleSelect = useCallback(
    (nextValue: string) => (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();

      if (onChange) onChange(nextValue);
      setIsOpen(false);
    },
    [onChange],
  );

  useOnClickOutside(ref, () => {
    setIsOpen(false);
  });

  useEffect(() => {
    const max = getMaxChildrenWidth(ref.current?.querySelector("ul"));
    setMaxW(max || 0);
  }, []);

  const handleOpen = useCallback(() => {
    setIsOpen(true);

    /**
     * The part below aims to automatically scroll to selected value.
     * Cannot make it work for now.
     */
    // setTimeout(() => {
    //   if (!value) return;
    //
    //   const selectedLi = ulRef.current?.querySelector(`#dropdown-value-${value}`);
    //   const { top = 0, height = 0 } = selectedLi?.getBoundingClientRect() || {};
    //   ulRef.current?.scrollTo({ top: top - height * 2 });
    // }, 200);
  }, []);

  return (
    <button
      data-testid="dropdown-button"
      ref={ref}
      className={classnames(
        classes.wrapper,
        {
          [classes.wrapper__open]: isOpen,
        },
        classNames?.wrapper,
      )}
      onClick={handleOpen}
    >
      <span style={{ minWidth: maxW }}>
        {valueLabel ? <span>{valueLabel}</span> : <span className={classes.value_placeholder}>{placeholder}</span>}
        <Icon icon={icon} size={iconSize} />
      </span>

      <ul ref={ulRef} className={classnames(classes.item_list, classNames?.item_list)}>
        {allowEmpty && (
          <li
            data-testid="empty-placeholder"
            className={classnames(classes.item_list_item, classes.item_list_item__placeholder)}
          >
            <button onClick={handleSelect("")}>{placeholder}</button>
          </li>
        )}
        {items.map((item) => (
          <li
            key={item.value}
            data-testid={item.value}
            id={`dropdown-value-${item.value}`}
            className={classnames(
              classes.item_list_item,
              {
                [classes.item_list_item__selected]: value === item.value,
              },
              classNames?.item_list_item,
            )}
          >
            <button data-testid={`button-${item.value}`} onClick={handleSelect(item.value)}>
              {item.text}
            </button>
          </li>
        ))}
      </ul>
    </button>
  );
};

export default DropdownButton;
