import { FC, InputHTMLAttributes } from "react";

import useTextEditingController, { UseTextEditingController } from "./useTextEditingController";

/** Defines Input props */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * If you want to control the input directly, pass in a controller.
   * Use it like this
   *
   * @example
   * const _controller = useTextEditingController({ listenValue: true });
   */
  controller?: UseTextEditingController;
}

/**
 * Basic **Input**.
 * Can be `controlled` by passing `controller` prop.
 *
 * @param   {InputProps}  props The props.
 * @example
 * <Input />
 * @returns {JSX.Element}       The JSX element
 * @see UseTextEditingController
 */
export const Input: FC<InputProps> = ({ controller, ...props }) => {
  const _defaultController = useTextEditingController({ listenValue: false });
  const _controller = controller || _defaultController;

  return (
    <input
      ref={_controller.ref}
      onSelect={_controller.handleSelectionChange}
      onChange={_controller.handleChange}
      data-testid="text-field"
      {...props}
    />
  );
};

export default Input;
