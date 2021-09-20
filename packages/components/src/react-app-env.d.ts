/// <reference types="react-scripts" />

// eslint-disable-next-line react/no-typos
import "react";

declare module "react" {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}
