import React from "react";

function AddForm() {
  return (
    <div className="form-container">
      <h2>New Book</h2>
      <form>
        <label htmlFor="name">Book Name</label>
        <input type="text" name="name" placeholder=" Name..." />
        <label htmlFor="name">Book Author</label>
        <input type="text" name="author" placeholder=" Author..." />
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddForm;
