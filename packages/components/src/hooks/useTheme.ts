import { useContext } from "react";

import { ThemeContext } from "../theme-provider";

/**
 * Use this hook to get current user theme.
 *
 * It's actually used by `Button` component to get primary color.
 *
 * @example
 * const { primaryColor } = useTheme();
 * @returns {ThemeData} The theme.
 */
const useTheme = () => useContext(ThemeContext);

export default useTheme;
