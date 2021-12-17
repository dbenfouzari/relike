import { Meta, Story } from "@storybook/react";
import { CSSProperties } from "react";
import { FixedSizeList } from "react-window";

import Icon, { IconProps } from "../icon";
import Icons, { IconData } from "./icons";

/** Defines IconComponent props */
type IconComponentProps = {
  /** The icon name */
  value: keyof Icons;
  /** The icon itself */
  icon: IconData;
};

/**
 * Displays an Icon component with its name.
 *
 * @param {IconComponentProps} props The props
 * @example
 * <IconComponent value="access_time" icon={Icons.access_time} />
 * @returns {JSX.Element} The JSX element.
 */
const IconComponent = ({ value, icon }: IconComponentProps) => (
  <div style={{ marginBottom: 12, display: "flex", alignItems: "center" }}>
    <Icon icon={icon} />
    <div>{value}</div>
  </div>
);

export default {
  title: "Icons",
  component: IconComponent,
} as Meta<IconProps>;

/** Defines Row props */
type RowProps = {
  /** Row index in array */
  index: number;
  /** Row styles */
  style: CSSProperties;
};

/**
 * Displays a single Icon row.
 *
 * It's used by react-window `FixedSizeList` to automatically generate icon rows.
 *
 * @param {RowProps} props The props
 * @example
 * <Row index={3} style={...} />
 * @returns {JSX.Element} The row
 */
const Row = ({ index, style }: RowProps) => {
  const icon = Object.entries(Icons)[index];
  return (
    <div style={style}>
      <IconComponent value={icon[0] as keyof Icons} icon={icon[1]} />
    </div>
  );
};

/**
 * Default template. Displays all icons.
 *
 * @example
 * <Template />
 * @returns {JSX.Element} The rows of icons.
 */
const Template: Story<IconProps> = () => (
  <FixedSizeList height={800} itemCount={Object.keys(Icons).length} itemSize={55} width={800}>
    {Row}
  </FixedSizeList>
);

export const Default = Template.bind({});
Default.args = {};
