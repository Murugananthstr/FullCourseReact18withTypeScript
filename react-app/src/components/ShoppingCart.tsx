import React from "react";

export interface Product {
  productId: number;
  title: string;
}

interface ShoppingCartProps {
  products: Product[];
  onClick: () => void;
}

const ShoppingCart = ({ products, onClick }: ShoppingCartProps) => {
  return (
    <div>
      <p> No of Products :</p>
      <ul>
        {products.map((x) => (
          <li key={x.productId}>{x.title}</li>
        ))}
      </ul>
      <button onClick={onClick}>Remove the Product</button>
    </div>
  );
};

export default ShoppingCart;
