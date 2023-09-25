import { useState } from "react";
import ExpenseList, {
  Expense,
} from "./components/expense-tracker/components/ExpenseList";
import ExpenseFilter from "./components/expense-tracker/components/ExpenseFilter";
import Expenses from "./components/expense-tracker/components/Expenses";

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

  const [expense, setExpense] = useState(expensesDetails);

  const categories = Array.from(
    new Set(expensesDetails.map((x) => x.category))
  );
  categories.unshift("All Category");

  const handleDelete = (id: number) => {
    setExpense(expense.filter((x) => x.id != id));
  };

  const handleSelectCategory = (category: string) => {
    setExpense(
      category === "All Category"
        ? expense
        : expense.filter((x) => x.category === category)
    );
  };

  const handleAddExpense = (newItem: Expense) => {
    setExpense([...expense, newItem]);
  };

  return (
    <div>
      <div className="m-5">
        <Expenses
          categories={categories.filter((x) => x != "All Category")}
          onAddExpense={handleAddExpense}
        />
      </div>
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
