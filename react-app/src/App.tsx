import Button from "./components/Button";

function App() {
  const handleClick = () => {
    console.log("Clicked");
  };
  return (
    <div>
      <Button onClick={handleClick} color="secondary">
        Sample Button
      </Button>
    </div>
  );
}

export default App;
