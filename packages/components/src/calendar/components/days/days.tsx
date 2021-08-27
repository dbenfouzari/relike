import classnames from "classnames";
import { FC, useMemo } from "react";

import Tooltip from "../../../tooltip";
import { DAYS, SupportedLocales } from "../../constants";
import { Day } from "../../types";
import classes from "./days.module.scss";

export interface DaysProps {
  locale: SupportedLocales;
  formatDay?: (day: Day) => string;
}

const Days: FC<DaysProps> = ({ locale, formatDay = (value) => value.substr(0, 3) }) => {
  const localizedDays = useMemo(() => DAYS[locale], [locale]);

  return (
    <>
      {localizedDays.map((day) => (
        <span key={day} className={classnames(classes.day_name)}>
          <Tooltip label={day}>
            <span>{formatDay(day)}</span>
          </Tooltip>
        </span>
      ))}
    </>
  );
};

export default Days;
