import React, { useState } from "react";

const List = (props) => {
  const [isClicked, setClicked] = useState(false);

  const clickHandler = () => {
    //toggle the value of isClicked and shift it between true and false for the conditional inline styling:
    setClicked(!isClicked);

    //send the id of the clicked item via onItemRemoval prop:
    props.onItemRemoval(props.id);
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
