import Button from "./components/Button/Button";
import Like from "./components/Like/Like";

function App() {
  return (
    <div>
      <Button
        children="My Button"
        color="primary"
        onClick={() => console.log("Button Clicked")}
      />
      <Like />
    </div>
  );
}

export default App;
