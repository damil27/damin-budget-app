import React from "react";
import ExpensesItem from "./ExpensesItem";

const ExpensesList = () => {
  const expenses = [
    { id: 1234, name: "shopping", cost: 1200 },
    { id: 1234, name: "subscription", cost: 1000 },
    { id: 1234, name: "FoodSTuff", cost: 2000 },
    { id: 1234, name: "Movie", cost: 3200 },
    { id: 1234, name: "Trasportation", cost: 2100 },
    { id: 1234, name: "Tithe", cost: 3333 },
    { id: 1234, name: "Savings", cost: 3300 },
  ];

  return (
    <div>
      <ul className="list-group">
        {expenses.map((expense) => (
          <ExpensesItem
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;
