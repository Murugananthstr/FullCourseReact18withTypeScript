import React from "react";

export interface Product {
  productId: number;
  title: string;
}

interface ShoppingCartProps {
  products: Product[];
  onRemove: () => void;
  onClear: () => void;
  onAdd: () => void;
}

const ShoppingCart = ({
  products,
  onRemove,
  onClear,
  onAdd,
}: ShoppingCartProps) => {
  return (
    <div>
      <p> No of Products :</p>
      <ul>
        {products.map((x) => (
          <li key={x.productId}>{x.title}</li>
        ))}
      </ul>
      <button onClick={onRemove}>Remove the Product</button>
      <button onClick={onClear}>Clean all the Product</button>
      <button onClick={onAdd}>Add new Product </button>
    </div>
  );
};

export default ShoppingCart;
