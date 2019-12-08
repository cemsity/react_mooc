import React from 'react';
import ReactDOM from 'react-dom';

const Footer = () => {
    return (
        <div>
            greeting app create by
            <a href="https://github.com/cemsity">Stephen Hilson</a>
        </div>
    )
}

const App = (props) => {
    const {counter} = props 
    return (
        <div>
            <h1>{counter}</h1>
            <Footer />
        </div>
        
    )
}
let counter = 1

const refresh = () => {

    ReactDOM.render(
        <App counter={counter}/>,
        document.getElementById('root')
        )
    }

refresh()
counter +=1
refresh()
counter +=1
refresh()
counter +=1
