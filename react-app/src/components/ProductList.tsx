import { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Setting Products");
    setProducts(["Dishwasher", "Handwash"]);
  });

  return <div>ProductList</div>;
}

export default ProductList;
