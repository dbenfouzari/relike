import Color from "../color";
import Icons, { IconData } from "../icons";

export enum AlertSeverities {
  error = "error",
  warning = "warning",
  info = "info",
  success = "success",
}

export const DEFAULT_ICONS: Record<AlertSeverities, IconData> = {
  [AlertSeverities.error]: Icons.error_outline,
  [AlertSeverities.warning]: Icons.report_problem_outlined,
  [AlertSeverities.info]: Icons.info_outline,
  [AlertSeverities.success]: Icons.check_circle_outline,
};

export const DEFAULT_COLORS: Record<AlertSeverities, Record<"font" | "icon" | "background", Color>> = {
  [AlertSeverities.error]: {
    font: new Color(0xff5f2120),
    icon: new Color(0xffef5350),
    background: new Color(0xfffdeded),
  },
  [AlertSeverities.warning]: {
    font: new Color(0xff663c00),
    icon: new Color(0xffff9900),
    background: new Color(0xfffff4e5),
  },
  [AlertSeverities.info]: {
    font: new Color(0xff014361),
    icon: new Color(0xff03a9f4),
    background: new Color(0xffe5f6fd),
  },
  [AlertSeverities.success]: {
    font: new Color(0xff1e4620),
    icon: new Color(0xff4caf4f),
    background: new Color(0xffedf7ed),
  },
};

export type AvatarIcon = keyof typeof DEFAULT_ICONS;
export type AvatarColors = typeof DEFAULT_COLORS[keyof typeof DEFAULT_COLORS];
