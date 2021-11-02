import React, { ReactChildren } from "react";

export interface GridTableRowProps {
  children: ReactChildren;
}

const GridTableRow: React.FunctionComponent<GridTableRowProps> = ({ children }) => (
  <>
    { children }
  </>
);

export default GridTableRow;
