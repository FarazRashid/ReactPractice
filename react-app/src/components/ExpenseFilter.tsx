function ExpenseFilter() {
  const categories = ["Grocery", "Utility", "Entertainment"];

  return (
    <select className="form-select mb-3" aria-label="Default select example">
      <option selected>All Categories</option>
      {categories.map((category) => {
        return <option key={category}>{category}</option>;
      })}
    </select>
  );
}

export default ExpenseFilter;
