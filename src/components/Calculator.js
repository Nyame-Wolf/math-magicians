/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Calculator extends React.Component {
  render() {
    return (
      <div className="grid">
        <input className="input" value="0" disabled />
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button" className="sign1">&divide;</button>

        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button" className="sign1">&times;</button>

        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button" className="sign1">-</button>

        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button" className="sign1">+</button>

        <button type="button" className="item0">0</button>
        <button type="button">.</button>
        <button type="button" className="sign1">=</button>
      </div>
    );
  }
}

export default Calculator;
