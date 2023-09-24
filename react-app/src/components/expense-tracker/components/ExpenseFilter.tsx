import React from "react";

interface Props {
  categories: string[];
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ categories, onSelectCategory }: Props) => {
  return (
    <div>
      <select
        name=""
        id=""
        className="form-select"
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        {categories.map((x) => (
          <option key={x} value={x}>
            {x}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
