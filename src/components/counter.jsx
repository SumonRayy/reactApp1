 import React, { Component } from 'react';

class Counter extends Component {

  state = {
    count : 0,
  };

handleIncrement = () => {
  console.log("Increment Clicked!");
  this.setState({ count : this.state.count + 1 })
};

handleReset = () => {
  console.log("Reset to Zero");
  this.setState({count: 0})
};

  render() {

    return (
    <div>
        <button onClick={this.handleIncrement} className="btn btn-dark btn-lg">Increment</button>
        <span className={this.colorChanger()}>{this.numberDekhao()}</span><br/>
        <button onClick={this.handleReset} className="btn btn-danger m-1">Reset</button>
        <nav className="navbar navbar-expand-sm bg-success navbar-dark">
        </nav>
    </div>
  );
  }

colorChanger() {
  let colors =  "badge m-2 badge-";
  colors += this.state.count === 0 ? "warning" : "primary";
  return colors;
}



numberDekhao() {
  const { count } = this.state;
  const z = <h1>Zero</h1>;
  const o = <h1>{count}</h1>;
  return count === 0 ? z : o ;
}


}

export default Counter;
