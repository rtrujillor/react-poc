import React , {Component} from 'react';
import ReactDOM from 'react-dom';

class Greeting extends Component {
    render(){
        const { name, age, children, myFunction } = this.props;
        return(
            <div>
                <h1>Hello { name }!</h1>
                <p>You are { age } years old </p>
                <p>And you have { children.length } children , called
                    { children.forEach( (child) => child )  }
                </p>
            </div>
        );
    }
}

export default Greeting;

