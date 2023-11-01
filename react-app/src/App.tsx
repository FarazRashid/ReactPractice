import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

const categories = ["Grocery", "Utility", "Entertainment"];

function App() {
  const addExpense = () => {};

  return (
    <div>
      <ExpenseForm onSubmit={addExpense} />
      <ExpenseFilter />
      <ExpenseList />
    </div>
  );
}

export default App;
export { categories };
