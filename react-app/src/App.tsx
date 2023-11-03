import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { FieldValues } from "react-hook-form";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expense, setExpense] = useState([
    {
      id: 0,
      description: "",
      amount: 0,
      category: "",
    },
  ]);

  const addExpense = (data: FieldValues) => {
    setExpense((prevValue) => [
      ...prevValue,
      {
        id: prevValue.length + 1,
        description: data.description,
        amount: data.amount,
        category: data.category,
      },
    ]);
    console.log(expense);
  };

  const deleteExpense = (id: number) => {
    console.log("Data to be deleted:", id);

    setExpense((prevValue) => prevValue.filter((value) => value.id !== id));
  };

  const selectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const visibleExpense = selectedCategory
    ? expense.filter((expense) => expense.category === selectedCategory)
    : expense;

  return (
    <div>
      <ExpenseForm onSubmit={addExpense} />
      <ExpenseFilter onSelect={selectCategory} />
      <ExpenseList expense={visibleExpense} deleteExpense={deleteExpense} />
    </div>
  );
}

export default App;
