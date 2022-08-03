/* eslint-disable */
import React from 'react';
import Input from './Input';
import calculate from '../logic/calculate'

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }
handleClick=(e)=>{
  const data = e.target.value;
  const calc = calculate(this.state, data)
  this.setState(calc)
  console.log(calc)
  
}
  render() {
     const { total, next } = this.state;
    return (
      <div className="grid">
        <div className="input">{next || total}</div>
        <Input type="button" value="AC" handleClick={this.handleClick} />
        <Input type="button" value="+/-" handleClick={this.handleClick} />
        <Input type="button" value="%" handleClick={this.handleClick} />
        <Input className="sign1" value="÷" handleClick={this.handleClick} />

        <Input type="button" value="7" handleClick={this.handleClick} />
        <Input type="button" value="8" handleClick={this.handleClick} />
        <Input type="button" value="9" handleClick={this.handleClick} />
        <Input type="button" className="sign1" value="x" handleClick={this.handleClick} />

        <Input type="button" value="4" handleClick={this.handleClick} />
        <Input type="button" value="5" handleClick={this.handleClick} />
        <Input type="button" value="6" handleClick={this.handleClick} />
        <Input type="button" className="sign1" value="-" handleClick={this.handleClick} />

        <Input type="button" value="1" handleClick={this.handleClick} />
        <Input type="button" value="2" handleClick={this.handleClick} />
        <Input type="button" value="3" handleClick={this.handleClick} />
        <Input type="button" className="sign1" value="+" handleClick={this.handleClick} />

        <Input type="button" className="item0" value="0" handleClick={this.handleClick} />
        <Input type="button" value="." handleClick={this.handleClick} />
        <Input type="button" className="sign1" value="=" handleClick={this.handleClick} />
      </div>
    );
  }
}

export default Calculator;
