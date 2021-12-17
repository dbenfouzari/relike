import { Meta, Story } from "@storybook/react";

import ExpansionPanel, { ExpansionPanelProps } from "./expansion-panel";
import classes from "./expansion-panel.stories.module.scss";

/**
 * A basic header
 *
 * @example
 * <Header />
 * @returns {JSX.Element} A span.
 */
const Header = () => <span>Hello Panel</span>;

export default {
  title: "ExpansionPanel",
  component: ExpansionPanel,
  argTypes: {
    headerBuilder: { control: { disable: true } },
    children: { control: { disable: true } },
    classNames: { control: { disable: true } },
  },
} as Meta<ExpansionPanelProps>;

/**
 * Default ExpansionPanel template.
 *
 * @param {ExpansionPanelProps} args The props.
 * @example
 * <Template {...args} />
 * @returns {JSX.Element} The ExpansionPanel component
 */
const Template: Story<ExpansionPanelProps> = (args) => (
  <ExpansionPanel {...args} headerBuilder={Header}>
    <span>Ah que coucou</span>
  </ExpansionPanel>
);

/**
 * Template with multiple ExpansionPanels.
 *
 * @param {ExpansionPanelProps} args The props.
 * @example
 * <TemplateMultiple {...args} />
 * @returns {JSX.Element} Wrapped ExpansionPanels components
 */
const TemplateMultiple: Story<ExpansionPanelProps> = (args) => (
  <div>
    <ExpansionPanel {...args} headerBuilder={Header}>
      <span>Ah que coucou</span>
    </ExpansionPanel>

    <ExpansionPanel {...args} headerBuilder={Header}>
      <span>Ah que coucou</span>
    </ExpansionPanel>

    <ExpansionPanel {...args} headerBuilder={Header}>
      <span>Ah que coucou</span>
    </ExpansionPanel>
  </div>
);

export const Default = Template.bind({});
Default.args = {};

export const Multiple = TemplateMultiple.bind({});
Multiple.args = {};

export const WithCustomClassNames = TemplateMultiple.bind({});
WithCustomClassNames.args = {
  classNames: {
    wrapper: classes.wrapper,
    header: classes.header,
    contentInner: classes.contentInner,
    contentOuter: classes.contentOuter,
    headerIconButton: classes.headerIconButton,
  },
};
