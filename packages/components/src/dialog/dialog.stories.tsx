import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";

import Dialog from "./dialog";

export default {
  title: "Dialog",
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

const Component = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open modal</button>

      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

const Template: ComponentStory<typeof Dialog> = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {};
