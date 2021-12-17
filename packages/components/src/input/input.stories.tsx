import { Meta, Story } from "@storybook/react";

import Input, { InputProps } from "./input";
import useTextEditingController from "./useTextEditingController";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    controller: { control: { disable: true } },
  },
} as Meta<InputProps>;

/**
 * Default template
 *
 * @param   {InputProps}  args The props.
 * @example
 * <Template />
 * @returns {JSX.Element}      The template
 */
const Template: Story<InputProps> = (args) => <Input {...args} />;

/**
 * Controlling [Input] may be useful to get current input value.
 * You can get it by calling `getValue` method, or by passing `listenValue` option to `true` then calling `.value`.
 *
 * @param   {InputProps}  args The props.
 * @example
 * <TemplateControlled />
 * @returns {JSX.Element}      The template
 */
const TemplateControlled: Story<InputProps> = (args) => {
  const _controller = useTextEditingController({ listenValue: true });

  return (
    <div>
      <Input {...args} controller={_controller} />
      <span>Value is : {_controller.value}</span>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};

/**
 * Controlling [Input] may be useful to get current input value.
 * You can get it by calling `getValue` method, or by passing `listenValue` option to `true` then calling `.value`.
 */
export const Controlled = TemplateControlled.bind({});
Controlled.args = {};
