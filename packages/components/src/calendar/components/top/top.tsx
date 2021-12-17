import { FC } from "react";

import Color from "../../../color";
import DateTime from "../../../date-time";
import Icon from "../../../icon";
import IconButton from "../../../icon-button";
import Icons from "../../../icons";
import Toolbar from "../../../toolbar";
import { MONTHS, STRINGS, SupportedCalendarLocales } from "../../constants";
import classes from "./top.module.scss";

/** Defines calendar header props */
export interface CalendarTopProps {
  /** Current date */
  currentDate: DateTime;
  /** Handle previous button click */
  onPrevClick: VoidFunction;
  /** Handle next button click */
  onNextClick: VoidFunction;
  /** Current calendar locale */
  locale: SupportedCalendarLocales;
}

/**
 * Renders calendar header
 *
 * @param   {CalendarTopProps} props The props
 * @example
 * <CalendarTop currentDate={DateTime.now()} locale={SupportedCalendarLocales.FR} />
 * @returns {JSX.Element}            The CalendarTop component
 */
const CalendarTop: FC<CalendarTopProps> = ({ currentDate, locale, onNextClick, onPrevClick }) => (
  <Toolbar
    className={classes.top}
    before={
      <IconButton
        tabIndex={0}
        data-testid="prev-month"
        onPress={onPrevClick}
        icon={<Icon icon={Icons.arrow_left} color={new Color(0xff6a7074)} />}
        label={STRINGS[locale]["prev-month"]}
      />
    }
    after={
      <IconButton
        tabIndex={0}
        data-testid="next-month"
        onPress={onNextClick}
        icon={<Icon icon={Icons.arrow_right} color={new Color(0xff6a7074)} />}
        label={STRINGS[locale]["next-month"]}
      />
    }
  >
    <div className={classes.center}>
      <span data-testid="month">{MONTHS[locale][currentDate.month - 1]}</span>
      <span>{currentDate.year}</span>
    </div>
  </Toolbar>
);

export default CalendarTop;
