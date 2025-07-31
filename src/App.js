import React from 'react';
import { ExpenseProvider } from './context/ExpenseContext';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Filter from './components/Filter';
import ExpenseChart from './components/ExpenseChart';
// src/index.js or src/main.jsx
import './index.css';


function App() {
  return (
    <ExpenseProvider>
      <div className="min-h-screen bg-gradient-to-tr from-stone-100 to-neutral-400">
        {/* Navbar */}
        <nav className="bg-teal-900 p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-white text-xl font-bold">💸 Expense Tracker</h1>
            <span className="text-rose-200 font-medium">Created by @hira nawaz15</span>
          </div>
        </nav>

        {/* Main Content */}
        <main className="container mx-auto p-6 space-y-6">
          <section className="bg-gradient-to-tr from-rose-500 to-teal-400 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-slate-800">Add New Expense</h2>
            <ExpenseForm />
          </section>

          <section className="bg-gradient-to-tr from-rose-500 to-teal-400 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-slate-800">Filter Expenses</h2>
            <Filter />
          </section>

          <section className="bg-gradient-to-tr from-stone-100 to-neutral-400 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-slate-800">Expense Chart</h2>
            <ExpenseChart />
          </section>

          <section className="bg-gradient-to-tr from-rose-500 to-teal-400 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-slate-800">Expense History</h2>
            <ExpenseList />
          </section>
        </main>
      </div>
      
    </ExpenseProvider>
   
  );
}

export default App;
