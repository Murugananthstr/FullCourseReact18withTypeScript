import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>(); // formState : {errors } this is called nested destructring

  const onSubmit = (data: FieldValues) => {
    console.log(data);
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
          {...register("name", { required: true, minLength: 5 })}
          className="form-control"
        />
        <p className="text-danger">
          {errors?.name?.type == "required" && "Please enter the name"}
          {errors?.name?.type == "minLength" && "The Name fields is required"}
        </p>
      </div>
      <div className="mb-3">
        <label htmlFor="Age" className="for-label">
          Age :
        </label>
        <input
          id="Age"
          type="number"
          {...register("age", { required: true, minLength: 1 })}
          className="form-control"
        />
        <p className="text-danger">
          {errors?.age?.type == "required" && "Please enter the age"}
        </p>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
