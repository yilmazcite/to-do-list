import React, { useState } from "react";

const List = (props) => {
  const [isClicked, setClicked] = useState(false);

  const clickHandler = (event) => {
    setClicked(!isClicked);

    let crossedOver = event.target.innerHTML;

    let selectedID;

    props.allItems.forEach((item) => {
      return isClicked === false && item.item === crossedOver
        ? (selectedID = item.id)
        : item;
    });

    props.onItemRemoval(isClicked, selectedID);
    //toggle the value of isClicked and shift it between true and false for the conditional inline styling.
  };

  return (
    <ul
      className="list-items"
      onClick={clickHandler}
      style={
        isClicked === true
          ? { textDecorationLine: "line-through" }
          : { textDecorationLine: "none" }
      }
    >
      {props.item}
    </ul>
  );
};

export default List;
