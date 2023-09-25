import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { Expense } from "./ExpenseList";

interface Props {
  categories?: string[];
  onAddExpense: (newItem: Expense) => void;
}

const schema = z.object({
  description: z
    .string()
    .min(5, { message: "The description must be atleast 5 characters." }),
  amount: z
    .number({ invalid_type_error: "Amount field is required." })
    .positive({ message: " Amount should be positive number." })
    .min(0, { message: "Amount must be greater than or equal to 0." }),
  category: z.string(),
});

type FormData = z.infer<typeof schema>;

const Expenses = ({ onAddExpense, categories = [] }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    const newItem: Expense = {
      id: new Date().getTime(),
      amount: data.amount,
      category: data.category,
      description: data.description,
    };
    onAddExpense(newItem);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="description" className="for-label">
            Description :
          </label>
          <input
            id="description "
            type="text"
            className="form-control"
            {...register("description")}
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="for-label">
            Amount :
          </label>
          <input
            id="amount"
            type="number"
            className="form-control"
            {...register("amount", { valueAsNumber: true })}
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category:
          </label>
          <select
            id="category"
            className="form-select"
            {...register("category")}
          >
            {categories.map((x) => (
              <option key={x} value={x}>
                {x}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-3"
          disabled={(errors.amount || errors.description) && !isValid}
        >
          <BsFillCartPlusFill size={30} /> Add
        </button>
      </form>
    </div>
  );
};

export default Expenses;
