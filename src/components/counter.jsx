import React, { Component } from 'react';
class Counter extends Component {
    state = {
        value : this.props.counter.value,

    };
    handleIncrement = ()=>{
        // this.setState((prevState)=>{
        //     return{
        //         value : prevState.value +1
        //     }
        // })

        this.setState({
            value : this.state.value +1
        })
    }

    render() {    
        return (
        <React.Fragment>
           <h4>{this.props.id}</h4>
            <span className = {this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick ={this.handleIncrement} className = "btn btn-secondary btn-sm">Increment</button>
            <button onClick={()=> this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
        
        </React.Fragment>
        );    
}

formatCount = () =>{
    const {value } = this.state;
    return value === 0 ? 'Zero' : value;
}

getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }
}
 
export default Counter;
