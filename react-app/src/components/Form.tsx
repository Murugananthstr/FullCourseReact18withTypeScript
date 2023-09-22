import React, { FormEvent, useRef, useState } from "react";

const Form = () => {
  const [person, setPerson] = useState({ name: "", age: 0 });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="from-label">
          Name :
        </label>
        <input
          id="name"
          type="text"
          value={person.name}
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Age" className="for-label">
          Age :
        </label>
        <input
          id="Age"
          type="number"
          value={person.age}
          onChange={(event) =>
            setPerson({ ...person, age: parseInt(event.target.value) })
          }
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
