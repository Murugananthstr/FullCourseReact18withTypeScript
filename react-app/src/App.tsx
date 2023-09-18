import { useState } from "react";
import Button from "./components/Button/Button";
import Like from "./components/Like/Like";
import Message from "./components/Message";

function App() {
  const [customer, setCustomer] = useState({
    name: "Ananth",
    Address: {
      City: "Surrey",
      ZipCode: "V3S 5G2",
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      Address: { ...customer.Address, City: "Bellevue" },
    });
  };
  return (
    <div>
      <pre>{JSON.stringify(customer, null, 2)}</pre>

      <button onClick={handleClick}>
        Click Here to Update the Customer object
      </button>
    </div>
  );
}

export default App;
