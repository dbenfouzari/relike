import classNames from "classnames";
import { CSSProperties, forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";

import { useOnClickOutside } from "../hooks";
import List from "../list";
import { Size } from "../size";
import Text from "../text";
import TextField from "../text-field";
import { AUTOCOMPLETE_LIST_OFFSET } from "./autocomplete.constants";
import classes from "./autocomplete.module.scss";

/** Defines an Autocomplete option */
export type AutocompleteOption = {
  /**
   * This value should be unique.
   */
  value: string | number;
  /**
   * This is what will be shown in suggestion list.
   */
  label: string | number;
};

/** Defines Autocomplete props */
export interface AutocompleteProps {
  /** This prop is used to override the style */
  className?: string;
  /** The Autocomplete options. */
  options: AutocompleteOption[];
  /** Callback that is called when user selects an option. */
  onItemSelect: (value: string | number) => void;
}

/** Component display name. */
const COMPONENT_NAME = "Autocomplete";

export const Autocomplete = forwardRef<HTMLDivElement, AutocompleteProps>(
  ({ className, options, onItemSelect, ...props }, ref) => {
    const divRef = useRef<HTMLDivElement>(null);
    const textFieldRef = useRef<HTMLInputElement>(null);
    const [isTextFieldFocused, setIsTextFieldFocused] = useState(false);
    const [textFieldValue, setTextFieldValue] = useState("");
    const [inputDimensions, setInputDimensions] = useState<Pick<DOMRect, "width" | "top" | "height">>({
      width: 0,
      top: 0,
      height: 0,
    });

    /**
     * Once component is loaded, store its dimensions,
     * so we can show autocomplete option list that is the same size.
     */
    useEffect(() => {
      /**
       * Because we can't test that `textFieldRef.current` is not null in Jest (because it never is),
       * we use the non-null-assertion to say it.
       */
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setInputDimensions(textFieldRef.current!.getBoundingClientRect());
    }, []);

    /**
     * Should autocomplete be open.
     */
    const isOpen = isTextFieldFocused && textFieldValue !== "";

    /**
     * We only have to show options that matches the user input.
     */
    const filteredOptions = options.filter((option) => {
      const regexp = new RegExp(textFieldValue, "i");
      return regexp.test(String(option.value)) || regexp.test(String(option.label));
    });

    /**
     * Since we use an inner ref, we have to give to forwarded ref the inner ref.
     */
    useImperativeHandle(ref, () => {
      return divRef.current as HTMLDivElement;
    });

    /**
     * When user clicks outside the whole autocomplete, we have to close it.
     */
    useOnClickOutside(divRef, () => {
      setIsTextFieldFocused(false);
    });

    const listStyle = useMemo<CSSProperties>(
      () => ({
        minWidth: inputDimensions.width,
        top: inputDimensions.top + inputDimensions.height + AUTOCOMPLETE_LIST_OFFSET,
      }),
      [inputDimensions.height, inputDimensions.top, inputDimensions.width],
    );

    /**
     * Method called by ListItem when user clicks an option.
     *
     * @param   {AutocompleteOption} option The selected option
     * @returns {void}                      Nothing
     * @example
     * <List.Item onPress={handleItemSelect("toto")} />
     */
    const handleItemSelect = (option: AutocompleteOption) => () => {
      onItemSelect(option.value);
      setIsTextFieldFocused(false);
      setTextFieldValue(String(option.label));
    };

    return (
      <div data-testid="autocomplete" ref={divRef} className={classNames(classes.autocomplete, className)} {...props}>
        <TextField
          ref={textFieldRef}
          value={textFieldValue}
          onChange={(e) => setTextFieldValue(e.target.value)}
          onFocus={() => {
            setIsTextFieldFocused(true);
          }}
        />

        {isOpen && (
          <List data-testid="autocomplete-list" className={classes.option_list} style={listStyle}>
            {filteredOptions.map((option) => (
              <List.Item
                data-testid={`autocomplete-list-item-${option.value}`}
                key={option.value}
                size={Size.tiny}
                onPress={handleItemSelect(option)}
              >
                <Text>{option.label}</Text>
              </List.Item>
            ))}
          </List>
        )}
      </div>
    );
  },
);
Autocomplete.displayName = COMPONENT_NAME;

export default Autocomplete;
