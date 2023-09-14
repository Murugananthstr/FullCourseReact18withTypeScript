import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const cities = [
    "New Delhi",
    "Chennai",
    "Mumbai",
    "Vancouver",
    "Heathrow",
    "Torranto",
    "Ontaria",
    "Calgary",
  ];

  const handleClick = (cityName: string) => {
    console.log(cityName);
  };

  return (
    <div>
      <ListGroup items={cities} heading="Cities" onSelectedItem={handleClick} />
    </div>
  );
}

export default App;
