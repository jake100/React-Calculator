import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [inputValue, setInputValue] = useState('');

  const handleClick = (value) => {
    setInputValue((prevInputValue) => prevInputValue + value);
  };

  const handleClear = () => {
    setInputValue('');
  };

  const handleEquals = () => {
    const result = eval(inputValue);
    setInputValue(result.toString());
  };

  return (
    <div className="calculator">
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />

      <div className="button-row">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('+')}>+</button>
      </div>

      <div className="button-row">
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
      </div>

      <div className="button-row">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('*')}>*</button>
      </div>

      <div className="button-row">
        <button onClick={() => handleClear()}>Clear</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleEquals()}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>
    </div>
  );
}

export default Calculator;
