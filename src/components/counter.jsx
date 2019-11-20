 import React, { Component } from 'react';

class valueer extends Component {

  state = {
    value : this.props.value,
  };

handleIncrement = () => {
  console.log("Increment Clicked!");
  this.setState({ value : this.state.value + 1 })
};

handleReset = () => {
  console.log("Reset to Zero");
  this.setState({value: 0})
};

  render() {
    console.log('props', this.props);

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
  colors += this.state.value === 0 ? "warning" : "primary";
  return colors;
}



numberDekhao() {
  const { value } = this.state;
  const z = <h1>Zero</h1>;
  const o = <h1>{value}</h1>;
  return value === 0 ? z : o ;
}


}

export default valueer;
