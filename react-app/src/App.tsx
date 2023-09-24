import { useState } from "react";
import ExpenseList, {
  Expense,
} from "./components/expense-tracker/components/ExpenseList";
import ExpenseFilter from "./components/expense-tracker/components/ExpenseFilter";

function App() {
  const expensesDetails: Expense[] = [
    {
      id: 1,
      description: "Milk",
      amount: 5.0,
      category: "Groceries",
    },
    {
      id: 2,
      description: "Eggs",
      amount: 10.0,
      category: "Groceries",
    },
    {
      id: 3,
      description: "Electricity",
      amount: 100.0,
      category: "Utilities",
    },
    {
      id: 4,
      description: "Movies",
      amount: 15.0,
      category: "Entertainment",
    },
    {
      id: 5,
      description: "Milk",
      amount: 5.0,
      category: "Groceries",
    },
    {
      id: 6,
      description: "Pencil",
      amount: 5.0,
      category: "Stationary",
    },
    {
      id: 7,
      description: "Pen",
      amount: 5.0,
      category: "Stationary",
    },
  ];

  const categories = Array.from(
    new Set(expensesDetails.map((x) => x.category))
  );
  categories.unshift("All Category");

  const [expense, setExpense] = useState(expensesDetails);

  const handleDelete = (id: number) => {
    setExpense(expense.filter((x) => x.id != id));
  };

  const handleSelectCategory = (category: string) => {
    setExpense(
      category === "All Category"
        ? expensesDetails
        : expensesDetails.filter((x) => x.category === category)
    );
  };

  return (
    <div>
      <div className="mb-3">
        <ExpenseFilter
          categories={categories}
          onSelectCategory={handleSelectCategory}
        />
      </div>
      <ExpenseList expenses={expense} onDelete={handleDelete} />
    </div>
  );
}

export default App;
