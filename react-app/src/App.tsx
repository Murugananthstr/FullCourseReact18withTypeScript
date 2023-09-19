import { useState } from "react";

function App() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 5 },
    ],
  });

  const handleSetCartQuantity = () => {
    const dupCart = cart.items.map((x) =>
      x.id == 2 ? { ...x, quantity: x.quantity + 1 } : x
    );
    setCart({ ...cart, items: [...dupCart] });
  };

  return (
    <div>
      <pre>{JSON.stringify(cart, null, 2)}</pre>
      <button onClick={() => handleSetCartQuantity()}>
        Increase the Quantity of Product 2
      </button>
    </div>
  );
}

export default App;
