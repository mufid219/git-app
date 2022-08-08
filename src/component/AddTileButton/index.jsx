import React from "react";
import { func, string } from "prop-types";

function AddTileButton({ color, onClick }) {
  const buttonStyles = {
    backgroundColor: color,
    display: "inline-block",
    width: '20px',
    height: '20px',
    cursor: "pointer",
    border: "1px solid black",
    marginRight : '10px'
  };
  return <div style={buttonStyles} onClick={onClick}></div>;
}

AddTileButton.propTypes = {
  color: string.isRequired,
  onClick: func.isRequired,
};

export default AddTileButton;
