import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';




const ExpenseItem = ({ expense }) => {
  const { dispatch } = useContext(ExpenseContext);

  const handleDelete = () => {
    dispatch({ type: 'DELETE_EXPENSE', payload: expense.id });
  };

  return (
    <li>
      {expense.title} - ${expense.amount} ({expense.category}) on {expense.date}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default ExpenseItem;
