import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTile, removeTile } from "../../features/grid/action";
import AddTileButton from "../AddTileButton";
import Tile from "../Tile/Index";

const colors = ["red", "blue", "pink", "yellow", "gray"];

function Grid() {
  const gridTile = useSelector((state) => state.grid);
  const dispatch = useDispatch();
  return (
    <div>
      <div style={{ maxWidth: "400px", overflow: "hidden" }}>
        {gridTile.map((tile, index) => {
          return (
            <Tile
              {...tile}
              key={index}
              onDoubleClick={(_) => dispatch(removeTile(tile.id))}
            />
          );
        })}
      </div>

      <br />

      <div>
        {colors.map((color) => {
          return (
            <AddTileButton
              key={color}
              color={color}
              onClick={(_) => dispatch(addTile(color))}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Grid;
