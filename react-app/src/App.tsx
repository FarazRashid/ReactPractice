import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Islamabad", "Lahore", "Karachi", "Quetta"];

  return (
    <div>
      <ListGroup items={items} heading="List" />
    </div>
  );
}

export default App;
