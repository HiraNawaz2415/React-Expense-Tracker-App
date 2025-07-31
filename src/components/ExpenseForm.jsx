import React, { useState, useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import { v4 as uuidv4 } from 'uuid';

const ExpenseForm = () => {
  const { dispatch } = useContext(ExpenseContext);

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // default to today

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      id: uuidv4(),
      title,
      amount: parseFloat(amount),
      category,
      date, // use selected date
    };

    dispatch({ type: 'ADD_EXPENSE', payload: newExpense });

    setTitle('');
    setAmount('');
    setCategory('');
    setDate(new Date().toISOString().split('T')[0]); // reset to today
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full"
        required
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 w-full"
        required
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 w-full"
        required
      >
        <option value="" disabled>Select Category</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Shopping">Shopping</option>
        <option value="Utilities">Utilities</option>
        <option value="Health">Health</option>
        <option value="Other">Other</option>
      </select>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border p-2 w-full"
        required
      />

      <button type="submit" className="bg-teal-900 text-white p-2 rounded">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
