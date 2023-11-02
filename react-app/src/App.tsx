import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { FieldValues } from "react-hook-form";

const categories = ["Grocery", "Utility", "Entertainment"];

function App() {
  const [expense, setExpense] = useState([
    {
      description: "",
      amount: 0,
      category: "",
    },
  ]);

  const addExpense = (data: FieldValues) => {
    setExpense((prevValue) => [
      ...prevValue,
      {
        description: data.description,
        amount: data.amount,
        category: data.category,
      },
    ]);
    console.log(expense);
  };

  const deleteExpense = (data: FieldValues) => {
    console.log("Data to be deleted:", data);

    setExpense((prevValue) =>
      prevValue.filter((value) => value.description !== data.description)
    );
  };

  return (
    <div>
      <ExpenseForm onSubmit={addExpense} />
      <ExpenseFilter />
      <ExpenseList expense={expense} deleteExpense={deleteExpense} />
    </div>
  );
}

export default App;
export { categories };
