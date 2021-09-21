import { Colors } from "@hastics/utils";
import classNames from "classnames";
import { CSSProperties, FC, InputHTMLAttributes } from "react";

import Input from "../input";
import classes from "./text-field.module.scss";

/**
 * I intentionally remove the `type` prop, since it will break the `TextField`
 */
type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

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
 */
export const TextField: FC<TextFieldProps> = ({ className, obscureText, ...props }) => (
  <Input
    type={obscureText ? "password" : "text"}
    className={classNames(classes.text_field, className)}
    style={
      {
        "--primary-color": Colors.blueGrey[200].toRGBA(),
        "--darker-color": Colors.blueGrey[400].toRGBA(),
      } as CSSProperties
    }
    {...props}
  />
);

export default TextField;
