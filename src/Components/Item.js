import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function Item(props) {
  return (
    <li
      className="list-group-item d-flex flex-row align-items-center"
      key={props.id}
    >
      <span className="taskName flex-grow-1">{props.item.value}</span>
      <button onClick={() => props.itemUp(props.item.id)}>
        <ArrowUpwardIcon />
      </button>
      <button onClick={() => props.itemDown(props.item.id)}>
        <ArrowDownwardIcon />
      </button>
      <button onClick={() => props.removeItem(props.item.id)}>
        <DeleteIcon />
      </button>
    </li>
  );
}

export default Item;
