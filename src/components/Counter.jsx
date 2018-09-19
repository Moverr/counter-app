import React,{Component} from 'react';

class Counter extends Component {
    //State is a special property, it includes data that the component needs
    state = {
        count:0,
        imageUrl:'https://picsum.photos/100'
    };
    render() { 
        return(
            <React.Fragment>
                <img src={this.state.imageUrl} alt= "" />
                <span>{this.formatCount()}</span>
                <button >Increment</button>
            </React.Fragment>
        ); 
    }
    formatCount(){
        const {count} = this.state;
        return count === 0 ? <h1>ZERO</h1> : count ;
    }
}
 
export default Counter;