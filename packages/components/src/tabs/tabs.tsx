import classnames from "classnames";
import { Children, CSSProperties, FC, ReactElement } from "react";
import { createUseStyles } from "react-jss";

import Color from "../color";
import Colors from "../colors";
import TabItem, { InnerTabItem, TabItemProps } from "./components/tab-item";
import useTabs from "./hooks/useTabs";
import classes from "./tabs.module.scss";

/** Defines Tabs props */
export interface TabsProps {
  /**
   * Select what tab should be selected first.
   *
   * @default first tab
   */
  defaultActiveKey?: string;

  /**
   * The [Tab.Item]s you want to show.
   *
   * @see TabItem
   */
  children: ReactElement<TabItemProps>[];

  /**
   * The amount of space between each tab.
   *
   * @default 32
   */
  space?: number;

  /**
   * Override the active tab color.
   *
   * @default Colors.blue[500]
   * @see Color
   */
  activeColor?: Color;

  /**
   * Override the inactive tab color.
   *
   * @default Colors.black87
   * @see Color
   */
  inactiveColor?: Color;
}

/** Defines Tabs component that includes TabItem */
type TabsComponent = FC<TabsProps> & {
  /**
   * Call TabItem directly without importing it.
   *
   * @example
   * <Tabs.Item />
   */
  Item: typeof TabItem;
};

/** Defines props for Tabs styles */
interface TabsStylesProps {
  /** Space between two tabs. */
  space: number;
  /** Main color when tab is active */
  activeColor: Color;
  /** Main color when tab is inactive */
  inactiveColor: Color;
}

const DEFAULT_TABS_SPACE = 32;

const useStyles = createUseStyles({
  /**
   * Generate styles from args
   *
   * @param {TabsStylesProps} args Tab styles props
   * @example
   * wrapper({ space: 32, activeColor: Colors.blue, inactiveColor: Colors.grey })
   * @returns {CSSProperties} styles
   */
  wrapper: ({ space, activeColor, inactiveColor }: TabsStylesProps) =>
    ({
      "--tabs-space": space + "px",
      "--active-color": activeColor.toRGBA(),
      "--inactive-color": inactiveColor.toRGBA(),
    } as CSSProperties),
});

/**
 * A component that displays a horizontal row of tabs.
 *
 * @param {TabsProps} props Tabs props.
 * @example
 * <Tabs>
 *   <Tabs.Item>Hello</Tabs.Item>
 *   <Tabs.Item>World</Tabs.Item>
 * </Tabs>
 * @returns {JSX.Element} JSX element.
 */
export const Tabs: TabsComponent = ({
  defaultActiveKey,
  children,
  space = DEFAULT_TABS_SPACE,
  activeColor = Colors.blue[500],
  inactiveColor = Colors.black87,
}) => {
  const { activeIndex, barRef, handleTabChange, itemRef } = useTabs(children, defaultActiveKey, space);

  const activeItem: ReactElement<TabItemProps> = children[activeIndex];
  const activeItemColor = activeItem.props.activeColor ?? activeColor;
  const inactiveItemColor = activeItem.props.inactiveColor ?? inactiveColor;

  const styles = useStyles({
    space,
    activeColor: activeItemColor,
    inactiveColor: inactiveItemColor,
  });

  return (
    <div className={classnames(classes.wrapper, styles.wrapper)} role="tablist">
      {Children.map(children as ReactElement<TabItemProps>[], (child, index) => (
        <InnerTabItem
          index={index}
          ref={itemRef(index)}
          onChange={handleTabChange(index)}
          active={activeIndex === index}
          {...child.props}
        />
      ))}

      <div ref={barRef} className={classes.bar} />
    </div>
  );
};

Tabs.Item = TabItem;

export default Tabs;
