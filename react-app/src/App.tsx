import Like from "./components/Like";
import { ReactNode } from "react";

function App() {
  const handleClick = () => {
    console.log("clicked");
  };

  const div: ReactNode = (
    <div>
      <Like onClick={handleClick} />
    </div>
  );

  return div;
}

export default App;
