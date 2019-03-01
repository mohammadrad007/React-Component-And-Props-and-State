import React, { Component } from 'react'
import Counter from './counter'; 

class Counters extends Component {
    state = { 
        counters : [
            {
                id :1, value:0
            },
            {
                id :2, value:5
            },
            {
                id :3, value:2
            },
            {
                id :4, value:7
            }
        ]
    };
    handeleDelete = (counterId)=>{
       const countersConst = this.state.counters.filter(c => c.id !== counterId);
       this.setState({ counters : countersConst})
    }
    render() { 
        return ( 
            <>
               {this.state.counters.map( counter =>
                 <Counter key={counter.id} counter={counter} onDelete={this.handeleDelete} /> )}
                 
            </>
        );
    }
}
 
export default Counters;