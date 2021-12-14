import { FC } from "react";

import Color from "../../../color";
import DateTime from "../../../date-time";
import Icon from "../../../icon";
import IconButton from "../../../icon-button";
import Icons from "../../../icons";
import Tooltip from "../../../tooltip";
import { MONTHS, STRINGS, SupportedLocales } from "../../constants";
import classes from "./top.module.scss";

export interface CalendarTopProps {
  currentDate: DateTime;
  onPrevClick: VoidFunction;
  onNextClick: VoidFunction;
  locale: SupportedLocales;
}

const CalendarTop: FC<CalendarTopProps> = ({ currentDate, locale, onNextClick, onPrevClick }) => (
  <div className={classes.top}>
    <Tooltip label={STRINGS[locale]["prev-month"]}>
      <IconButton
        tabIndex={0}
        data-testid="prev-month"
        onPress={onPrevClick}
        icon={<Icon icon={Icons.arrow_left} color={new Color(0xff6a7074)} />}
      />
    </Tooltip>

    <div className={classes.center}>
      <span data-testid="month">{MONTHS[locale][currentDate.month - 1]}</span>
      <span>{currentDate.year}</span>
    </div>

    <Tooltip label={STRINGS[locale]["next-month"]}>
      <IconButton
        tabIndex={0}
        data-testid="next-month"
        onPress={onNextClick}
        icon={<Icon icon={Icons.arrow_right} color={new Color(0xff6a7074)} />}
      />
    </Tooltip>
  </div>
);

export default CalendarTop;
