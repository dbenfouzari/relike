import classnames from "classnames";
import { FC, ReactChild, ReactChildren } from "react";

import Icon from "../icon";
import IconButton from "../icon-button";
import Icons from "../icons";
import Padding from "../padding";
import classes from "./expansion-panel.module.scss";
import useExpansion from "./useExpansion";

/** Defines possible className overrides for ExpansionPanel component */
export interface ExpansionPanelClassNames {
  /***/
  wrapper?: string;
  /***/
  header?: string;
  /***/
  headerIconButton?: string;
  /***/
  contentOuter?: string;
  /***/
  contentInner?: string;
}

/** Defines ExpansionPanel props */
export interface ExpansionPanelProps {
  /** The component builder that builds the expansion panels' header. */
  headerBuilder: ({
    isExpanded,
  }: {
    /** Provides a way to know if the panel is expanded. */
    isExpanded: boolean;
  }) => JSX.Element;
  /**
   * The body of the expansion panel that's displayed below the header.
   * It's only displayed when panel is expanded.
   */
  children: ReactChildren | ReactChild;
  /**
   * You can override multiples classNames, so it really looks like you want.
   */
  classNames?: ExpansionPanelClassNames;
}

/**
 * A content area which can be collapsed or expanded.
 *
 * It has a header and a body and can be either expanded or collapsed.
 * The body of the panel is only visible when it is expanded.
 *
 * @param   {ExpansionPanelProps} props The props
 * @example
 * <ExpansionPanel {...args} headerBuilder={<span>Title</span>}>
 *   <span>Hello World</span>
 * </ExpansionPanel>
 * @returns {JSX.Element}               The JSX Element
 */
export const ExpansionPanel: FC<ExpansionPanelProps> = ({ headerBuilder, children, classNames }) => {
  const { ref: contentRef, contentHeight, isExpanded, toggleExpand } = useExpansion(children);

  return (
    <div
      data-testid="expansion-panel"
      className={classnames(classes.wrapper, { [classes.wrapper__open]: isExpanded }, classNames?.wrapper)}
    >
      <div className={classnames(classes.header, classNames?.header)}>
        {headerBuilder({ isExpanded })}

        <IconButton
          data-testid="toggle"
          onPress={toggleExpand}
          icon={<Icon icon={Icons.keyboard_arrow_down} className={classes.arrow} />}
          padding={Padding.all(24)}
          className={classNames?.headerIconButton}
        />
      </div>

      <div
        ref={contentRef}
        className={classnames(classes.content, classNames?.contentOuter)}
        style={{ maxHeight: contentHeight }}
      >
        <div className={classnames(classes.content_inner, classNames?.contentInner)}>{children}</div>
      </div>
    </div>
  );
};

export default ExpansionPanel;
