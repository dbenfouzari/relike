/// <reference types="react-scripts" />

import "react";

declare module "react" {
  /** This overrides HTMLAttributes to allow `react-jss` special props */
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    /** Is the style used in a JSX component */
    jsx?: boolean;
    /** Is the style global */
    global?: boolean;
  }
}
