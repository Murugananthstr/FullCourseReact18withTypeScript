import { FieldValues, useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, formState } = useForm();
  console.log(formState.errors);
  const onSubmit = (data: FieldValues) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="from-label">
          Name :
        </label>
        <input
          id="name"
          type="text"
          {...register("name", { required: true, minLength: 5 })}
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
          {...register("age")}
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
