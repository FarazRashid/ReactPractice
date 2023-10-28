import { useState } from "react";

function App() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      {
        id: 1,
        title: "Product 1",
        quantity: 1,
      },
      {
        id: 2,
        title: "Product 2",
        quantity: 3,
      },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) => {
        if (item.id === 1) {
          return { ...item, quantity: 2 };
        }
        return item;
      }),
    });
  };

  return (
    <div>
      <input></input>
      <button>Submit</button>
    </div>
  );
}

export default App;
