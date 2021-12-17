import classnames from "classnames";
import { FC, useMemo } from "react";

import Tooltip from "../../../tooltip";
import { DAYS, SupportedCalendarLocales } from "../../constants";
import { Day } from "../../types";
import classes from "./days.module.scss";

/** Defines Days props */
export interface DaysProps {
  /** Calendar locale */
  locale: SupportedCalendarLocales;
  /** Day formatter */
  formatDay?: (day: Day) => string;
}

/**
 * Extract three first letters.
 *
 * Used to format days
 *
 * @param   {string} str The string to format
 * @example
 * threeFirstLetters("monday") // "mon"
 * @returns {string}     The 3 first letters.
 */
export const threeFirstLetters = (str: string) => str.substr(0, 3);

/**
 * Render Days component
 *
 * @param   {DaysProps}   props The props
 * @example
 * <Days locale={SupportedCalendarLocales.FR} />
 * @returns {JSX.Element}       The Days component
 */
const Days: FC<DaysProps> = ({ locale, formatDay = threeFirstLetters }) => {
  const localizedDays = useMemo(() => DAYS[locale], [locale]);

  return (
    <>
      {localizedDays.map((day) => (
        <span key={day} className={classnames(classes.day_name)}>
          <Tooltip label={day}>
            <span data-testid={day}>{formatDay(day)}</span>
          </Tooltip>
        </span>
      ))}
    </>
  );
};

export default Days;
