import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import AnotherComponent from './components/anotherComponent';
import Greeting from './components/greeting';

// With plain Javascript
const HelloWorld = React.createClass({

    displayName: 'Hola Mundo',

    render: function render() {
        return React.createElement(
            'div', {className:'wrapper'} ,
            React.createElement(
                'h1', {className: 'title'}, 'Hello World with plain Javascript'),
            React.createElement(
                'p', null, 'My first React component'
            )
        );
    }
});

ReactDOM.render( <HelloWorld />, document.getElementById('componentWithJavascript'));

// With JSX
const HelloWorldJSX = React.createClass({
    render(){
        return (
            <div>
            <h1> Hello world with JSX</h1 >
        </div>
        )
    }
});

ReactDOM.render(<HelloWorldJSX />, document.getElementById('componentWithJSX'));

// With ES2015 Style and JSX
// We extend the Component class and overwrite render function

var myStyle = {
    color: 'blue',
    border: 'apx solid #000',
    backgroundColor: '#ffa'
}

class HolaMundoES2015Style extends  Component {
    render(){
        // Inside the render function,  we can write javascript code
        let value = 'expression';
        // But inside the return, only JSX  expression between {}
        return (
            <div>
                <h1 style={ myStyle }> Hello world with ES2015 Style : {value} </h1 >
                <AnotherComponent />
                <Greeting name="Ricardo" age={ 20 } children={ ['Ricardo JR', 'Laura'] } func={ this.myFunction } />
            </div>
        );
    }
}

export default HolaMundoES2015Style;

ReactDOM.render(<HolaMundoES2015Style />, document.getElementById('componentWithES2015'));

// JSX stateless style
const HelloWorldStateLess = () => {
    return <h1> Hello World stateless</h1>
}

ReactDOM.render(HelloWorldStateLess(), document.getElementById("componentStateless"));

// Components list
const Item = () => {
    return(<div>I am an item, </div>);
}
const List =  () => {
    var items = [];
    for(var i=1; i< 100; i++){
        items.push(<Item key='{i}' />);
    }
    return(
        <div> { items } </div>
    );

}

ReactDOM.render(List(), document.getElementById('list'));
