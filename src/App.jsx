import { useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Bread",
      amount: 40,
      category: "grocery",
    },
    {
      id: 2,
      description: "Monthly Ruter pass",
      amount: 50,
      category: "transportation",
    },
    { id: 3, description: "Electricity bill", amount: 60, category: "housing" },
    { id: 4, description: "Dress", amount: 70, category: "clothes" },
    {
      id: 5,
      description: "1 spotify subscription",
      amount: 85,
      category: "other",
    },
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
