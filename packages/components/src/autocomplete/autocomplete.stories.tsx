import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react";

import Autocomplete, { AutocompleteProps } from "./autocomplete";

export default {
  title: "Autocomplete",
  component: Autocomplete,
} as Meta<AutocompleteProps>;

const CITIES = [
  {
    value: "losangeles",
    label: "Los Angeles",
  },
  {
    value: "sanfrancisco",
    label: "San Francisco",
  },
  {
    value: "paris",
    label: "Paris",
  },
  {
    value: "montpellier",
    label: "Montpellier",
  },
  {
    value: "bordeaux",
    label: "Bordeaux",
  },
  {
    value: "toulouse",
    label: "Toulouse",
  },
  {
    value: "lyon",
    label: "Lyon",
  },
  {
    value: "montevideo",
    label: "Montevideo",
  },
];

/**
 * Default Autocomplete template.
 *
 * @param   {AutocompleteProps} args The props
 * @returns {JSX.Element}            The autocomplete component
 * @example
 * <Template {...args} />
 */
const Template: Story<AutocompleteProps> = (args) => <Autocomplete {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: CITIES,
  onItemSelect: action("select option"),
};
