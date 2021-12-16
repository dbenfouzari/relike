import classnames from "classnames";
import type { CSSProperties, FC } from "react";
import { createUseStyles } from "react-jss";

import Color from "../../../color";
import Icon from "../../../icon";
import Icons, { IconData } from "../../../icons";
import classes from "./stepper-item.module.scss";

/** Defines StepperItem props */
export interface StepperItemProps {
  /**
   * Title of the step. Mandatory, it's the step title.
   */
  title: string;
  /**
   * A small step description.
   */
  description?: string;
  /**
   * Subtitle to allow showing additional data.
   */
  subTitle?: string;
}

/** Defines internal stepper item props. */
export interface InternalStepperItemProps extends StepperItemProps {
  /** Is the stepper item current ? */
  isCurrent: boolean;
  /** Is the stepper item past ? */
  isPast: boolean;
  /** Stepper item index in array */
  index: number;
  /**
   * Primary StepperItem color.
   *
   * It defines :
   * - past & current icon border color
   * - past line color
   * - current icon color
   */
  primaryColor: Color;
  /**
   * Secondary StepperItem color.
   *
   * It defines :
   * - past description color
   * - subtitle color (time left in Storybook example)
   */
  secondaryColor: Color;
  /**
   * Disabled StepperItem color.
   *
   * It defines :
   * - next item title color
   * - next item description color
   * - next item icon color
   */
  disabledColor: Color;
  /**
   * Disabled StepperItem color.
   *
   * It defines current title and description color.
   */
  titleColor: Color;
}

/** Defines props to generate stepper item styles. */
type StepperItemStylesProps = Pick<
  InternalStepperItemProps,
  "primaryColor" | "secondaryColor" | "disabledColor" | "titleColor"
>;

const useStyles = createUseStyles({
  /**
   * Generates styles based on props
   *
   * @param {StepperItemStylesProps} props The styles props.
   * @example
   * wrapper({
   *   disabledColor: Colors.grey,
   *   secondaryColor: Colors.red,
   *   primaryColor: Colors.blue,
   *   titleColor: Colors.blue
   * })
   * @returns {CSSProperties} CSS rules
   */
  wrapper: ({ disabledColor, secondaryColor, primaryColor, titleColor }: StepperItemStylesProps) =>
    ({
      "--stepper-main-color": primaryColor.toRGBA(),
      "--stepper-secondary-color": secondaryColor.toRGBA(),
      "--stepper-disabled-color": disabledColor.toRGBA(),
      "--stepper-title-color": titleColor.toRGBA(),
    } as CSSProperties),
});

/**
 * Stepper Item
 *
 * @example
 * <StepperItem title="Test" />
 * @returns {JSX.Element} JSX element.
 */
export const StepperItem: FC<StepperItemProps> = () => null;

/**
 * The internal StepperItem. It is only used by Stepper component to render something,
 * but should not be used directly.
 *
 * @param {InternalStepperItemProps} props The props.
 * @example
 * <InternalStepperItem
 *   key={index}
 *   isCurrent={index === current}
 *   isPast={index < current}
 *   index={index}
 *   disabledColor={disabledColor}
 *   secondaryColor={secondaryColor}
 *   primaryColor={primaryColor}
 *   titleColor={titleColor}
 *   {...child.props}
 * />
 * @returns {JSX.Element} JSX Element.
 */
export const InternalStepperItem: FC<InternalStepperItemProps> = ({
  title,
  description,
  subTitle,
  isCurrent,
  isPast,
  index,
  disabledColor,
  secondaryColor,
  primaryColor,
  titleColor,
}) => {
  const styles = useStyles({
    primaryColor,
    secondaryColor,
    disabledColor,
    titleColor,
  });

  const icon: IconData = isPast ? Icons.check : isCurrent ? Icons.check_box : Icons.pin;

  const iconComponent = isPast ? <Icon icon={icon} color={primaryColor} /> : index + 1;

  return (
    <div
      className={classnames(styles.wrapper, classes.item, {
        [classes.item__current]: isCurrent,
        [classes.item__past]: isPast,
      })}
    >
      <div className={classes.container}>
        <span className={classes.icon}>{iconComponent}</span>
        <div className={classes.content}>
          <span className={classes.title}>
            {title} <span className={classes.subtitle}>{subTitle}</span>
          </span>
          <span className={classes.description}>{description}</span>
        </div>
      </div>
    </div>
  );
};

export default StepperItem;
