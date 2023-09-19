import { useState } from "react";
import Button from "./components/Button/Button";
import Like from "./components/Like/Like";
import Message from "./components/Message";
import produce from "immer";
import NavBar from "./components/NavBar";
import ShoppingCart, { Product } from "./components/ShoppingCart";

function App() {
  const items: Product[] = [
    { productId: 1, title: "Product 1" },
    { productId: 2, title: "Product 2" },
  ];

  const [products, setProducts] = useState(items);

  const handleRemovProduct = () => {
    setProducts(products.filter((x) => x.productId != 2));
  };

  return (
    <div>
      <NavBar noOfProducts={products.length} />
      <ShoppingCart products={products} />
      <button onClick={handleRemovProduct}>Remove the Product</button>
    </div>
  );
}

export default App;
