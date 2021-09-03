import classNames from "classnames";
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
}

interface CheckboxStyleProps {
  color: Color;
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
  ({ className, color = Colors.blue[400], defaultChecked = false, label, disabled, ...props }, ref) => {
    const [isChecked, setIsChecked] = useState(defaultChecked);
    const styles = useStyles({ color });

    const handleChange = useCallback(() => {
      setIsChecked((prev) => !prev);
    }, []);

    return (
      <label className={classNames(classes.wrapper, { [classes.wrapper__disabled]: disabled })}>
        <div className={classes.outer}>
          <input
            ref={ref}
            data-testid="input"
            type="checkbox"
            className={classNames(classes.checkbox, styles.checkbox, className)}
            checked={isChecked}
            onChange={handleChange}
            disabled={disabled}
          />

          <span className={classNames(classes.checkmark, { [classes.checkmark__checked]: isChecked })}>
            <Icon icon={Icons.check} size={16} color={Colors.white} />
          </span>
        </div>

        {label && (
          <span data-testid="label" className={classes.label}>
            {label}
          </span>
        )}
      </label>
    );
  },
);
Checkbox.displayName = COMPONENT_NAME;

export default Checkbox;
