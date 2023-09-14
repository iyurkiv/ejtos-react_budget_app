import React, { useContext, useState, } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseTotal from './ExpenseTotal';

const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);


    const handleBudgetChange = (event) => {
        if (event.target.value > 20000) {
            alert("The budget cannot exceed 20000!" );
            return;
        }
        if (event.target.value < totalExpenses) {
            alert("The budget cannot be lowered below amount already spent!" );
            return;
        }

        setNewBudget(event.target.value);
        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        });

    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={(handleBudgetChange)}></input>
        </div>
        
    );
};
export default Budget;