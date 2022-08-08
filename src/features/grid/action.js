import { ADD_TILE, REMOVE_TILE } from "./constant";

export function addTile(color) {
  return {
    type: ADD_TILE,
    createdAt: Date.now(),
    color,
  };
}

export function removeTile(id) {
  return {
    id,
    type: REMOVE_TILE,
  };
}
