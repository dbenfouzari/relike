import { FC } from "react";

import GridViewCount from "./components/grid-view-count";

/** Define GridView component */
type GridViewComponent = FC & {
  /** Allows `<GridView.Count />` */
  Count: typeof GridViewCount;
};

/**
 * Actually, GridView does nothing and is only used to display `GridViewCount` thanks to `GridView.Count`
 *
 * @example
 * <GridView />
 * @returns {null} nothing.
 */
const GridView: GridViewComponent = () => null;

GridView.Count = GridViewCount;

export default GridView;
