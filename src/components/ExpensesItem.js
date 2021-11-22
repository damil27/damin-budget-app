import { getByPlaceholderText } from "@testing-library/dom";
import React from "react";
import { TiDelete } from "react-icons/ti";

const ExpensesItem = (props) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center ">
      {props.name}
      <div>
        <span style={{ width: 100 }}># {props.cost}</span>
        <TiDelete size="1.4em"></TiDelete>
      </div>
    </li>
  );
};

export default ExpensesItem;
