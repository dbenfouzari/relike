import classnames from "classnames";
import { forwardRef, useCallback, useState } from "react";
import { createUseStyles } from "react-jss";

import Color from "../color";
import Colors from "../colors";
import { Icon } from "../icon";
import Icons from "../icons";
import classes from "./checkbox.module.scss";

export interface CheckboxProps {
  /** This prop is used to override the style */
  className?: string;
  /** Is checked by default ? */
  defaultChecked?: boolean;
  /**
   * @default Colors.blue[400]
   */
  color?: Color;
  label?: string;
  disabled?: boolean;
  classNames?: ClassNames;
}

interface CheckboxStyleProps {
  color: Color;
}

interface ClassNames {
  /**
   * This is the component that wraps all content.
   * By default, it aligns checkbox with label.
   */
  wrapper?: string;

  /**
   * This is the component that wraps the checkbox itself.
   * By default, it applies some hover and active effects (box-shadow).
   */
  outer?: string;

  /**
   * This is the `input` component.
   * By default, we apply some styling to `:before` to handle state and styling.
   *
   * This is where you may want to override styles.
   *
   * Same as passing `className` to `Checkbox` component.
   */
  input?: string;

  /**
   * This is the component that wraps the checked icon.
   *
   * By default, we apply some styles to position it in its container.
   */
  checkmark?: string;

  /**
   * This is the component that wraps the label you provided.
   */
  label?: string;
}

/**
 * Component display name.
 */
const COMPONENT_NAME = "Checkbox";

const useStyles = createUseStyles({
  checkbox: ({ color }: CheckboxStyleProps) => ({
    "&:checked:before": {
      backgroundColor: color.toRGBA(),
      borderColor: color.toRGBA(),
    },
  }),
});

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, color = Colors.blue[400], classNames, defaultChecked = false, label, disabled, ...props }, ref) => {
    const [isChecked, setIsChecked] = useState(defaultChecked);
    const styles = useStyles({ color });

    const handleChange = useCallback(() => {
      setIsChecked((prev) => !prev);
    }, []);

    return (
      <label className={classnames(classes.wrapper, { [classes.wrapper__disabled]: disabled }, classNames?.wrapper)}>
        <div className={classnames(classes.outer, classNames?.outer)}>
          <input
            ref={ref}
            data-testid="input"
            type="checkbox"
            className={classnames(classes.checkbox, styles.checkbox, className, classNames?.input)}
            checked={isChecked}
            onChange={handleChange}
            disabled={disabled}
          />

          <span
            className={classnames(
              classes.checkmark,
              { [classes.checkmark__checked]: isChecked },
              classNames?.checkmark,
            )}
          >
            <Icon icon={Icons.check} size={16} color={Colors.white} />
          </span>
        </div>

        {label && (
          <span data-testid="label" className={classnames(classes.label, classNames?.label)}>
            {label}
          </span>
        )}
      </label>
    );
  },
);
Checkbox.displayName = COMPONENT_NAME;

export default Checkbox;
