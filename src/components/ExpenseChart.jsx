import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from 'recharts';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#00C49F'];

const ExpenseChart = () => {
  const { expenses } = useContext(ExpenseContext);

  const categoryTotals = expenses.reduce((acc, expense) => {
    const { category, amount } = expense;
    acc[category] = (acc[category] || 0) + amount;
    return acc;
  }, {});

  const data = Object.keys(categoryTotals).map((key) => ({
    name: key,
    value: categoryTotals[key],
  }));

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseChart;
