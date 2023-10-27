import { Button } from "./components/Button";
import { Alert } from "./components/Alert";
import { useState } from "react";

function App() {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked((prevValue) => !prevValue);
  }

  return (
    <div>
      {clicked && <Alert clicked={handleClick} />}
      <Button type="primary" onClick={handleClick}>
        {" "}
        Click Here
      </Button>
    </div>
  );
}

export default App;
