import React, { useState, useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import exportToCSV from '../utils/exportToCSV';

const Filter = () => {
  const { expenses } = useContext(ExpenseContext);
  const [year, setYear] = useState('');

  const filtered = year
    ? expenses.filter(e => new Date(e.date).getFullYear().toString() === year)
    : expenses;

  const handleExport = () => exportToCSV(filtered, 'expenses.csv');

  return (
    <div className="flex justify-between items-center mb-4">
      <input
        type="number"
        value={year}
        onChange={e => setYear(e.target.value)}
        placeholder="Filter by year"
        className="p-2 border rounded"
      />
      <button onClick={handleExport} className="bg-teal-900 text-white px-4 py-2 rounded hover:bg-green-700">
        Export CSV
      </button>
    </div>
  );
};

export default Filter;
