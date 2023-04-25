import React, { useState } from "react";

import Input from "./Components/Input";
import List from "./Components/List";

function App() {
  const [items, setItems] = useState([]);

  function addItem(input) {
    if (!input) {
      return;
    }
    const newItems = [input, ...items];
    setItems(newItems);
  }

  function itemUp(id) {
    const index = items.findIndex((item) => item.id === id);
    const newItems = items;
    const o = newItems[index];
    if (index === 0) {
      newItems.shift();
      newItems.push(o);
    } else {
      newItems[index] = newItems[index - 1];
      newItems[index - 1] = o;
    }
    setItems((items) => [...newItems]);
  }

  function itemDown(id) {
    const index = items.findIndex((item) => item.id === id);
    const newItems = items;
    const o = newItems[index];
    if (index === items.length - 1) {
      newItems.pop();
      newItems.unshift(o);
    } else {
      newItems[index] = newItems[index + 1];
      newItems[index + 1] = o;
    }
    console.log(newItems);
    setItems((items) => [...newItems]);
  }

  function removeItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="container">
      <div className="row">
      <h1 className="h1 text-center bg-primary text-white py-2 mt-2">To-do list</h1>
      <Input addItem={addItem} />
      <List
        items={items}
        removeItem={removeItem}
        itemUp={itemUp}
        itemDown={itemDown}
      />
    </div>
    </div>
  );
}

export default App;
