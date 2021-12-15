import { FC } from "react";

import GridViewCount from "./components/grid-view-count";

type GridViewComponent = FC & {
  Count: typeof GridViewCount;
};

const GridView: GridViewComponent = () => null;

GridView.Count = GridViewCount;

export default GridView;
