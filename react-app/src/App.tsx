import ListGroup from "./components/ListGroup";

function App() {
  const items = [
    "Tokyo",
    "Sans Fancisco",
    "India",
    "British Columbia",
    "Toranto",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectedItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
