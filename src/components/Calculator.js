import React, { useState } from 'react';
import Input from './Input';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: null, next: null, operation: null });
  const handleClick = (e) => {
    setState((prevState) => ({ ...prevState, ...calculate(prevState, e.target.value) }));
  };
  return (
    <div className="calc">
      <h2 className="calc-title">Let us do some math!</h2>
      <div className="grid">
        <div className="input">{state.next || state.total || 0}</div>
        <Input type="button" value="AC" handleClick={handleClick} />
        <Input type="button" value="+/-" handleClick={handleClick} />
        <Input type="button" value="%" handleClick={handleClick} />
        <Input className="sign1" value="÷" handleClick={handleClick} />

        <Input type="button" value="7" handleClick={handleClick} />
        <Input type="button" value="8" handleClick={handleClick} />
        <Input type="button" value="9" handleClick={handleClick} />
        <Input type="button" className="sign1" value="x" handleClick={handleClick} />

        <Input type="button" value="4" handleClick={handleClick} />
        <Input type="button" value="5" handleClick={handleClick} />
        <Input type="button" value="6" handleClick={handleClick} />
        <Input type="button" className="sign1" value="-" handleClick={handleClick} />

        <Input type="button" value="1" handleClick={handleClick} />
        <Input type="button" value="2" handleClick={handleClick} />
        <Input type="button" value="3" handleClick={handleClick} />
        <Input type="button" className="sign1" value="+" handleClick={handleClick} />

        <Input type="button" className="item0" value="0" handleClick={handleClick} />
        <Input type="button" value="." handleClick={handleClick} />
        <Input type="button" className="sign1" value="=" handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
