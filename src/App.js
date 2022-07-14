import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import Form from "./components/Form";
import RemoveItems from "./components/RemoveItems";

const App = () => {
  //store the input value into allItems state and send it to components as a prop:
  const [allItems, setAllItems] = useState([
    {
      item: "",
      id: "",
      isSelected: false,
    },
  ]);

  const addItemHandler = (newItem) => {
    //receive the 'newVal' from Form.js
    //and add it to the new object with 'id' included:
    const addedItems = {
      ...newItem,
      id: allItems.length + 1,
    };
    setAllItems((prevItems) => {
      //add the 'id' and item values to 'allItems' state variable:
      return [addedItems, ...prevItems];
    });
  };

  //filter out the array items with empty value of 'item' key:
  const removeBtnClickHandler = (newList) => {
    setAllItems(newList);
    const filteredItems = {
      ...newList,
      id: allItems.length + 1,
    };

    setAllItems((prevItems) => {
      return [filteredItems, ...prevItems];
    });
  };

  const removeItems = (itemCheck, itemID) => {
    //check the innerHTML of the clicked item and toggle boolean value of 'isSelected':
    allItems.forEach((item) => {
      return item.isSelected === itemCheck && item.id === itemID
        ? (item.isSelected = !item.isSelected)
        : item;
    });
  };

  return (
    <div>
      <Header />
      <Form onAddItem={addItemHandler} allItems={allItems} />
      {allItems
        .filter((item) => {
          return item.item !== "" && item.isSelected === false;
        })
        .map((item) => {
          return (
            <List
              key={item.id}
              item={item.item}
              allItems={allItems}
              onItemRemoval={removeItems}
            />
          );
        })}
      <div className="remove-button">
        <RemoveItems
          onRemoveBtnClick={removeBtnClickHandler}
          allItems={allItems}
        />
      </div>
    </div>
  );
};

export default App;
