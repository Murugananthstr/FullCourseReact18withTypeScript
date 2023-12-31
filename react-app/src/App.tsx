import { useState } from "react";
import Button from "./components/Button/Button";
import Like from "./components/Like/Like";
import Message from "./components/Message";

function App() {
  const [bugs, setBugs] = useState([
    { bugId: 1, title: "Bug 1", fixed: false },
    { bugId: 2, title: "Bug 2", fixed: false },
  ]);

  const handleUpdateClick = () => {
    // Updating the array object
    setBugs(
      bugs.map((bug) => (bug.bugId === 2 ? { ...bug, fixed: true } : bug))
    );
  };

  return (
    <div>
      <pre>{JSON.stringify(bugs, null, 2)}</pre>

      <button onClick={handleUpdateClick}>Update the Array Object</button>
    </div>
  );
}

export default App;
