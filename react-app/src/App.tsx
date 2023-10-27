import ListGroup from "./components/ListGroup";

function App() {
  const list = ["Islamabad", "Lahore", "Karachi", "Peshawar"];

  const onClick = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup items={list} heading="List" onSelectItem={onClick} />
    </div>
  );
}

export default App;
