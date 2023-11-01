import { categories } from "../App";

function ExpenseFilter() {
  return (
    <select className="form-select mb-3" aria-label="Default select example">
      <option selected>Open this select menu</option>
      {categories.map((category) => {
        return <option key={category}>{category}</option>;
      })}
    </select>
  );
}

export default ExpenseFilter;
