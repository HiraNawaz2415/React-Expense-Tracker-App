import React, { createContext, useReducer, useEffect } from 'react';

export const ExpenseContext = createContext();

const initialState = JSON.parse(localStorage.getItem('expenses')) || [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      const newExpenses = [...state, action.payload];
      localStorage.setItem('expenses', JSON.stringify(newExpenses));
      return newExpenses;
    case 'DELETE_EXPENSE':
      const filtered = state.filter(exp => exp.id !== action.payload);
      localStorage.setItem('expenses', JSON.stringify(filtered));
      return filtered;
    default:
      return state;
  }
};

export const ExpenseProvider = ({ children }) => {
  const [expenses, dispatch] = useReducer(reducer, initialState);

  return (
    <ExpenseContext.Provider value={{ expenses, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
};
