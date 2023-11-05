import categories from "./Categories";

interface Props {
  onSelect: (category: string) => void;
}

function ExpenseFilter({ onSelect }: Props) {
  return (
    <select
      className="form-select mb-3"
      aria-label="Default select example"
      onChange={(event) => {
        onSelect(event.target.value);
      }}
    >
      <option selected value="all">
        All Categories
      </option>
      {categories.map((category) => {
        return (
          <option key={category} value={category}>
            {category}
          </option>
        );
      })}
    </select>
  );
}

export default ExpenseFilter;
