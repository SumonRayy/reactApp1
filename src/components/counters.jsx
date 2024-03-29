import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
state = {
  counters : [
    {id: 1 , value : 4 },
    {id: 2 , value : 3 },
    {id: 3 , value : 2 },
    {id: 4 , value : 1 }
  ]
};

  render() {
    return(
        <div className="container center">
        <div className="card bg-info">
          {this.state.counters.map(counter =>
            <Counter key={counter.id} value ={counter.value} />)}
        </div>
        </div>
    );
  }
}



export default Counters;
