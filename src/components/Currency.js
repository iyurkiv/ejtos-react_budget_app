import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {currency, dispatch} = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);

    const handleCurrencyChange = (event) => {
        //console.log(event.target.value);
        setNewCurrency(event.target.value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
            
        });
        console.log(currency);
    }

    return (
        <div className={`alert ${'alert-success'}`}>
            <span> Currency</span>
            <select className={'dropDown'} onChange={(handleCurrencyChange)}>
                <option  value="$">$ Dollar</option>
                <option  value="£">£ Pound</option>
                <option  value="€">€ Euro</option>
                <option  value="₹">₹ Ruppee</option>
            </select>
        </div>
    );
};
export default Currency;