import classNames from "classnames";
import { CSSProperties, forwardRef, InputHTMLAttributes } from "react";

import Colors from "../colors";
import Input from "../input";
import classes from "./text-field.module.scss";

/**
 * I intentionally remove the `type` prop, since it will break the `TextField`
 */
type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

/** Defines props for TextField. */
export interface TextFieldProps extends InputProps {
  /**
   * Override style
   */
  className?: string;
  /**
   * Change input characters by * signs
   */
  obscureText?: boolean;
}

/**
 * A **TextField** lets the user enter text, either with hardware keyboard or with an onscreen keyboard.
 *
 * @param   {TextFieldProps} props The TextField props.
 * @example
 * <TextField obscureText value="toto" />
 * @returns {JSX.Element}          The JSX element.
 */
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({ className, obscureText, ...props }, ref) => (
  <Input
    ref={ref}
    type={obscureText ? "password" : "text"}
    className={classNames(classes.text_field, className)}
    role="textbox"
    style={
      {
        "--primary-color": Colors.blueGrey[200].toRGBA(),
        "--darker-color": Colors.blueGrey[400].toRGBA(),
      } as CSSProperties
    }
    {...props}
  />
));

export default TextField;
