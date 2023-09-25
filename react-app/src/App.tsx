import { useState } from "react";
import ExpenseList, {
  Expense,
} from "./components/expense-tracker/components/ExpenseList";
import ExpenseFilter from "./components/expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./components/expense-tracker/components/ExpenseForm";

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
  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpenses = selectedCategory
    ? expense.filter((x) => x.category === selectedCategory)
    : expense;

  const categories = Array.from(new Set(expense.map((x) => x.category)));
  categories.unshift("All Category");

  const handleSelectCategory = (category: string) => {
    category != "All Category"
      ? setSelectedCategory(category)
      : setSelectedCategory("");
  };

  const handleAddExpense = (newItem: Expense) => {
    setExpense([...expense, newItem]);
  };

  return (
    <div>
      <div className="m-5">
        <ExpenseForm
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
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpense(expense.filter((x) => x.id != id))}
      />
    </div>
  );
}

export default App;
