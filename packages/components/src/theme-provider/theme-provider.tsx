import { createContext } from "react";

import ThemeData from "../theme-data";
import Typography from "../typography";

/** The ThemeProvider value type. */
export type ThemeProviderValue = ThemeData;

export const ThemeContext = createContext<ThemeProviderValue>(
  new ThemeData({
    textTheme: Typography.blackMountainView,
  }),
);

export default ThemeContext.Provider;
