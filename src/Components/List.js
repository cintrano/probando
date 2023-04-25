import React from "react";

import Item from "./Item";

function List(props) {
  return (
    <ul className="list-group mt-2 p-0">
      {props.items.map((item) => {
        return (
          <Item
            item={item}
            itemUp={props.itemUp}
            itemDown={props.itemDown}
            removeItem={props.removeItem}
          />
        );
      })}
    </ul>
  );
}

export default List;
