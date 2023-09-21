import React from "react";

const Form = () => {
  return (
    <form
      onClick={() =>
        console.log(
          "Demo how the form submission is reloding the Form after submitting"
        )
      }
    >
      <div className="mb-3">
        <label htmlFor="name" className="from-label">
          Name :
        </label>
        <input id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="Age" className="for-label">
          Age :
        </label>
        <input id="Age" type="number" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
