import React from "react";
import Budget from "./components/budget";
import Remaining from "./components/remaining";
import Expenses from "./components/expenses";
import ExpensesList from "./components/expensesList";
import AddExpensesForm from "./components/addForm";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="container">
      <h2>Budget Planner APP !</h2>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget />
        </div>
        <div className="col-sm">
          <Remaining />
        </div>
        <div className="col-sm">
          <Expenses />
        </div>
      </div>
      <h3 className="mt-2">Expenses</h3>
      <div className="row mt-2">
        <div className="col-sm">
          <ExpensesList />
        </div>
      </div>
      <h3 className="mt-3"> Add Expenses</h3>
      <div className="mt-3">
        <div className="col-sm">
          <AddExpensesForm />
        </div>
      </div>
    </div>
  );
};

export default App;
