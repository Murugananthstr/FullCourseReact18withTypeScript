import { useState } from "react";
import ExpenseList, {
  Expense,
} from "./components/expense-tracker/components/ExpenseList";

function App() {
  const prodCategory: string[] = ["Groceries", "Utilities", "Entertainment"];

  const expensesDetails: Expense[] = [
    {
      id: 1,
      description: "Milk",
      amount: 5.0,
      category: prodCategory[0],
    },
    {
      id: 2,
      description: "Eggs",
      amount: 10.0,
      category: prodCategory[0],
    },
    {
      id: 3,
      description: "Electricity",
      amount: 100.0,
      category: prodCategory[1],
    },
    {
      id: 4,
      description: "Movies",
      amount: 15.0,
      category: prodCategory[2],
    },
    {
      id: 5,
      description: "Milk",
      amount: 5.0,
      category: prodCategory[0],
    },
  ];

  const [expense, setExpense] = useState(expensesDetails);

  const handleDelete = (id: number) => {
    setExpense(expense.filter((x) => x.id != id));
  };

  return (
    <div>
      <ExpenseList expenses={expense} onDelete={handleDelete} />
    </div>
  );
}

export default App;
