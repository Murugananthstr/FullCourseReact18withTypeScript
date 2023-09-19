import React from "react";

export interface Product {
  productId: number;
  title: string;
}

interface ShoppingCartProps {
  products: Product[];
}

const ShoppingCart = ({ products }: ShoppingCartProps) => {
  return (
    <div>
      <p> No of Products :</p>
      <ul>
        {products.map((x) => (
          <li key={x.productId}>{x.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
