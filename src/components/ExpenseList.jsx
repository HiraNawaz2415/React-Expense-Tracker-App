import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';

const ExpenseList = () => {
  const { expenses, dispatch } = useContext(ExpenseContext); // Use dispatch instead of deleteExpense

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_EXPENSE', payload: id });
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h3 className="text-xl font-semibold mb-2">Expenses</h3>
      <ul>
        {expenses.map(exp => (
          <li key={exp.id} className="flex justify-between items-center border-b py-2">
            <span>{exp.title} — ${exp.amount} — {exp.category}</span>
            <button onClick={() => handleDelete(exp.id)} className="text-teal-900 hover:underline rounded">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
