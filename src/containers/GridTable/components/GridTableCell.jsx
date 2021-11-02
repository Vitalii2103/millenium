import React, { ReactChildren } from "react";


export interface GridTableCellProps {
  children: ReactChildren;
  gridRowStart?: number;
  gridRowEnd?: number;
  gridColumnStart?: number;
  gridColumnEnd?: number;
  backgroundColor?: boolean
}

const GridTableCell: React.FunctionComponent<GridTableCellProps> = ({
  children,
  gridRowStart,
  gridRowEnd,
  gridColumnStart,
  gridColumnEnd,
  backgroundColor
}) => (
  <div className="grid-cell" style={{ gridRowStart, gridRowEnd, gridColumnStart, gridColumnEnd, backgroundColor }}>
    { children }
  </div>
);

export default GridTableCell;
