import { FieldValues, useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, formState } = useForm(); // register and handleSubmit is from react hook forms to handle the data from from control

  const onSubmit = (data: FieldValues) => {
    console.log(formState);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="from-label">
          Name :
        </label>
        <input
          id="name"
          type="text"
          {...register("name")} // this will add onBlur, onChange, ref attributes to this input control
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
          {...register("age")} // this will add onBlur, onChange, ref attributes to this input control, meaning similar to other attributes
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
