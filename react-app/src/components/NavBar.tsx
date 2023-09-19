import React from "react";

interface NavBarProps {
  noOfProducts: number;
}

const NavBar = ({ noOfProducts }: NavBarProps) => {
  return <div>Products Count : {noOfProducts}</div>;
};

export default NavBar;
