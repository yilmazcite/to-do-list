import React from "react";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";

const RemoveItems = (props) => {
  let newItems;

  const clickHandler = () => {
    newItems = props.allItems.filter((item) => {
      return item.item !== "";
    });

    props.onRemoveBtnClick(newItems);
  };

  return (
    <button
      style={
        props.allItems[0].id === ""
          ? { display: "none" }
          : { display: "initial" }
      }
    >
      <DeleteSweepIcon onClick={clickHandler} type="submit" />
    </button>
  );
};

export default RemoveItems;
