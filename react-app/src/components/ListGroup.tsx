import { MouseEvent } from "react";

function ListGroup() {
  const items = ["Islamabad", "Lahore", "Karachi", "Quetta"];
  // items = [];

  // const message = items.length === 0 ? <p>No Items Found</p> : null;

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {/*items.length === 0 ? <p>No Items Found</p> : null*/}
      {items.length === 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
