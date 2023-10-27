import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Islamabad", "Lahore", "Karachi", "Quetta"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup items={items} heading="List" onSelectItem={handleSelectItem} />
    </div>
  );
}

export default App;
