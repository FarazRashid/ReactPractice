import { Button } from "./components/Button";

function App() {
  function onClick() {
    console.log("button clicked");
  }

  return (
    <div>
      <Button type="primary" onClick={onClick}>
        {" "}
        Click Here
      </Button>
    </div>
  );
}

export default App;
