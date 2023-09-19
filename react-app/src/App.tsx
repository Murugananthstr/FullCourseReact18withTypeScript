import { useState } from "react";

function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleAddingToppings = (toppingsName: string) => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, toppingsName] });
  };

  return (
    <div>
      <pre>{JSON.stringify(pizza, null, 2)}</pre>
      <button onClick={() => handleAddingToppings("Cheese")}> Cheese</button>
      <button onClick={() => handleAddingToppings("Green Bell Pepper")}>
        Green Bell Pepper
      </button>
      <button onClick={() => handleAddingToppings("Black olives")}>
        Black olives
      </button>
    </div>
  );
}

export default App;
