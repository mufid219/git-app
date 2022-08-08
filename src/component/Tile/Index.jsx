import React from "react";
import { string, number, func } from "prop-types";
import "./Style.css";

function Tile({ id, color, onDoubleClick }) {
  return (
    <div
      style={{ backgroundColor: color }}
      className="tile"
      onDoubleClick={onDoubleClick}
    ></div>
  );
}

Tile.defaultProps = {
  color: "gray",
};

Tile.propTypes = {
  id: number.isRequired,
  color: string,
  onDoubleClick: func.isRequired,
};

export default Tile;
