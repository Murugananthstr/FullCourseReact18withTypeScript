import { FieldValues, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z
    .string()
    .min(5, { message: "Name must be atleast 5 characters" })
    .max(50, { message: "This name cannot exceed more than 50 characters" }),
  age: z
    .number({ invalid_type_error: "Age field is required." })
    .positive({ message: " Age should be positive number." })
    .min(18, { message: "Age must be greater than or equal to 18." }),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

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
          {...register("name")}
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="Age" className="for-label">
          Age :
        </label>
        <input
          id="Age"
          type="number"
          {...register("age", { valueAsNumber: true })}
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button
        type="submit"
        disabled={(errors.name || errors.age) && !isValid}
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
