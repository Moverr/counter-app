import React,{Component} from 'react';

class Counter extends Component {
    //State is a special property, it includes data that the component needs
    state = {
        count:0,
        // imageUrl:'https://picsum.photos/100'
    };
    // styles = {
    //     fontSize:60,
    //     fontWeight:'bold'
    // }
    render() { 
    

        return(
            <React.Fragment>
                {/* <img src={this.state.imageUrl} alt= "" /> */}
                {/* <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span> */}
                <span className={ this.getBadgeClasses()}>{this.formatCount()}</span>
                <button  className="btn btn-secondary btn-sm" >Increment</button>
            </React.Fragment>
        ); 
    }
    getBadgeClasses() {
        let spnClasses = "badge  m-2";
        spnClasses += (this.state.count === 0) ? " badge-warning " : " badge-primary  ";
        return spnClasses;
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? "ZERO" : count ;
    }
}
 
export default Counter;