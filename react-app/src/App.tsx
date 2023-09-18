import { useState } from "react";
import Button from "./components/Button/Button";
import Like from "./components/Like/Like";
import Message from "./components/Message";

function App() {
  const [tag, setTag] = useState(["happy", "cheerful"]);

  const handleClick = () => {
    //Add to the array
    setTag([...tag, "Exciting"]);
    //tag.push("happinesss");  this is reset the entire array, so not recommended
  };

  const handleRemoveClick = () => {
    // Remove the array
    setTag(tag.filter((tag) => tag != "cheerful"));
  };

  const handleUpdateClick = () => {
    // Remove the array
    setTag(tag.map((tag) => (tag === "happy" ? "Happiness" : tag)));
  };

  return (
    <div>
      <pre>{JSON.stringify(tag, null, 2)}</pre>

      <button onClick={handleClick}>Add to Array</button>
      <button onClick={handleUpdateClick}>Update to the Array</button>
      <button onClick={handleRemoveClick}>Remove from Array</button>
    </div>
  );
}

export default App;
