import classnames from "classnames";
import type { CSSProperties, FC, ReactNode, RefObject } from "react";
import { forwardRef } from "react";
import { createUseStyles } from "react-jss";

import Color from "../../../color";
import Icon from "../../../icon";
import { IconData } from "../../../icons";
import classes from "./tab-item.module.scss";

/** Defines TabItem props */
export interface TabItemProps {
  /** The tab name that will be shown. */
  name: string;
  /** Content that will be shown when tab is active */
  children: ReactNode;
  /** This key will be used by system to know default tab. */
  key: string;
  /**
   * An optional [IconData] to show aside of tab item name.
   *
   * @default undefined
   */
  icon?: IconData;
  /**
   * Override active icon & text color.
   *
   * @default Inherits from parent.
   */
  activeColor?: Color;
  /**
   * Override inactive icon & text color.
   *
   * @default Inherits from parent.
   */
  inactiveColor?: Color;
}

/**
 * Defines inner TabItem props.
 *
 * This is used directly by `Tabs`
 */
export interface InnerTabItemProps extends Omit<TabItemProps, "key"> {
  /** The tab item ref */
  ref: RefObject<HTMLDivElement>;
  /** Handler that is called when tab is changed */
  onChange: () => void;
  /** Is tab item active */
  active: boolean;
  /** The TabItem index in array */
  index: number;
}

/** Defines InnerTabItem styles props. */
type InnerTabItemStylesProps = {
  /** Color when tab is inactive */
  inactiveColor?: Color;
};

const useStyles = createUseStyles({
  /**
   * Generates styles based on args
   *
   * @param   {InnerTabItemStylesProps} args The props.
   * @example
   * item({ inactiveColor: Colors.grey })
   * @returns {CSSProperties}                InnerTabItem styles
   */
  item: ({ inactiveColor }: InnerTabItemStylesProps) =>
    inactiveColor &&
    ({
      "--inactive-color": inactiveColor.toRGBA(),
    } as CSSProperties),
});

export const InnerTabItem = forwardRef<HTMLButtonElement, InnerTabItemProps>(
  ({ name, onChange, active, icon, inactiveColor, index }, ref) => {
    const styles = useStyles({ inactiveColor });
    return (
      <button
        className={classnames(classes.item, styles.item, { [classes.item__active]: active })}
        ref={ref}
        onClick={onChange}
        role="tab"
        data-testid={index}
      >
        {icon && <Icon icon={icon} className={classes.icon} size={20} />}
        {name}
      </button>
    );
  },
);

/**
 * The TabItem
 *
 * @example
 * <TabItem name="Tab 1">Tab 1 content</TabItem>
 * @returns {JSX.Element} JSX element.
 */
export const TabItem: FC<TabItemProps> = () => null;

export default TabItem;
