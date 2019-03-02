import React, { Component } from 'react';
import Navbar from './component/Navbar';
import Counters from './component/counters';

class App extends Component {
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

    

    handeIncrement = counter =>{
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter };
        counters[index].value++;
        this.setState({counters});
    };

    handeReset = ()=>{
        const counterConst = this.state.counters.map(c =>{
          c.value = 0;
          return c;
        });
        this.setState({counterConst})
    };
    handeleDelete = (counterId)=>{
       const countersConst = this.state.counters.filter(c => c.id !== counterId);
       this.setState({ counters : countersConst})
    }
    render() { 
        return ( 
            <>
              <Navbar
              totalCounters = {this.state.counters.filter(c => c.value >0).length }
              />
              <main className="container">
                <Counters
                counters = {this.state.counters}
                onReset ={this.handeReset}
                onIncrement = {this.handeIncrement}
                onDelete ={this.handeleDelete}
                 />
              </main>
            </>
         );
    }
}
 
export default App;