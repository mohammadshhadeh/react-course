import React, { useState } from 'react';
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';
import ExpenseFiltered from './components/ExpenseFiltered/ExpenseFiltered';
import DUMMY_EXPENSES from './shared/data';
import ExpensesChart from './components/Expenses/ExpensesChart';

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const onSaveExpenseDataHandler = (props) => {
    setExpenses((prevExpenses) => [props, ...prevExpenses])
  }

  const updateExpenseFiltered  = (year) => {
    const filtered = DUMMY_EXPENSES.filter((item) => item.date.getFullYear() === parseInt(year));
    setExpenses(filtered)
  }

  return (
    <div className='expenses'>
        <NewExpense onSaveExpenseData={onSaveExpenseDataHandler} />
        <ExpenseFiltered updateExpenseFiltered={updateExpenseFiltered } />
        <ExpensesChart expenses={expenses} />
        <ExpenseItem expenses={expenses} />
    </div>
  );
}

export default App;
