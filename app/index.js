var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var Popular = require('./components/Popular');

//state
//lifecycle event
//UI

class App extends React.Component {

    render(){
        return (
            <div>
                <Popular/>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);