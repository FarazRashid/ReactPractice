function ListGroup() {
  let items = ["Islamabad", "Lahore", "Karachi", "Quetta"];
  items = [];

  // const message = items.length === 0 ? <p>No Items Found</p> : null;

  return (
    <>
      <h1>List</h1>
      {/*items.length === 0 ? <p>No Items Found</p> : null*/}
      {items.length === 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
