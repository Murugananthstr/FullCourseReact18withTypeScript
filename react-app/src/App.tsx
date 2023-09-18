import Button from "./components/Button/Button";
import Like from "./components/Like/Like";
import Message from "./components/Message";

function App() {
  return (
    <div>
      <Button
        children="My Button"
        color="primary"
        onClick={() => console.log("Button Clicked")}
      />
      <Like onClick={(e) => console.log(e)} />
      <Message />
      <Message />
    </div>
  );
}

export default App;
