import { useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const [expenses, setExpenses] = useState([

  ]);

  const addItem = (data) => {
    setExpenses(() => [...expenses, data])
  }

  const deleteItem = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const filterItem = (item_category) => {
    setExpenses(
      expenses.filter((expense) => expense.category == item_category)
    );
  };

  return (
    <>
      <ExpenseForm addExpense = {addItem}/>
      <ExpenseFilter filterItem={filterItem} />
      <ExpenseList items={expenses} deleteItem={deleteItem} />
    </>
  );
}

export default App;
