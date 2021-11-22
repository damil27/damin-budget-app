import React from "react";

const AddExpensesForm = () => {
  return (
    <form>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required className="form-control" />
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input type="number" required className="form-control" />
        </div>
        <button className="btn btn-primary btn-sm mt-3">Save</button>
      </div>
    </form>
  );
};

export default AddExpensesForm;
