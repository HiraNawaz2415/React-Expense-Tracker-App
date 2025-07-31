import React, { useContext, useState } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import ExpenseList from '../components/ExpenseList';
import ExpenseChart from '../components/ExpenseChart';

function AllExpenses() {
  const { expenses } = useContext(ExpenseContext);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  const filteredExpenses = expenses.filter((expense) => {
    const matchesCategory = categoryFilter ? expense.category === categoryFilter : true;
    const matchesDate = dateFilter ? expense.date === dateFilter : true;
    return matchesCategory && matchesDate;
  });

  return (
    <div className="container">
      <h2 className="text-2xl bg-teal-900 font-bold mb-4">All Expenses</h2>

      <div className="flex gap-4 mb-4">
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          <option value="">All Categories</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Shopping">Shopping</option>
        </select>

        <input
          type="date"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
          className="border px-2 py-1 rounded"
        />
      </div>

      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList expenses={filteredExpenses} />
    </div>
  );
}

export default AllExpenses;
