import { useContext } from "react";

import { ThemeContext } from "../theme-provider";

const useTheme = () => useContext(ThemeContext);

export default useTheme;
