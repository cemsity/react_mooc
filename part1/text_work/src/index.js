import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Footer = () => {
    return (
        <div>
            <p>This app was created by <a href="https://github.com/cemsity">Stephen Hilson</a></p>
        </div>
    )
}
const Display = ({ counter }) => {
    return (
        <div>
            <h2>HELLO with button components</h2>
            <h1>{counter}</h1>
        </div>
    )
}
const Button = ({ onClick, text }) => (
    <button onClick={onClick}>{text}</button>
)
const History = ({ allClicks }) => {
    if (allClicks.length === 0 ) {
        return (
            <div>
                The app is used by pressing the buttons
            </div>
        )
    } 
    return (
        <div>
            Button Press history: {allClicks.join(" ")}
        </div>
    )

}
const Hello = ({text}) => {
    if (text.length === 0){
        return (
            <div>
                <p></p>
            </div>
        )
    } 
    return (
        <div>
            <p>{text}</p>
        </div>
    )
}

const App = (props) => {
    const [counter, setCounter] = useState(0)
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])
    const [value, setValue] = useState("")

    const handleLeftClicks = () => {
        setAll(allClicks.concat("L"));
        setLeft(left+1)
    }

    const handleRightClicks = () => {
        setAll(allClicks.concat("R"));
        setRight(right+1)

    }
    const setToValue = (value) => {
        return () => {
            setCounter(value)
        }
    }

    const handleResetClicks = () => {
        setAll([]);
        setLeft(0);
        setRight(0);
    }

    const hello = (who) => {
        return () => setValue(who)
    }

    return (
        <div>
            <Display counter={counter} />
            <Button
                onClick={setToValue(counter + 1)}
                text='Plus' />
            <Button
                onClick={setToValue(0)}
                text='Reset' />
            <div>
                <div>
                    {left}
                    <Button onClick={handleLeftClicks} text='left' /> 
                    <Button onClick={handleRightClicks} text='right' />
                    {right}
                    <History allClicks={allClicks} />
                    <Button onClick={handleResetClicks} text="Reset" />
                </div>
            </div>
            <div>
                <Hello text={value} />
                <Button onClick={hello("world")} text="world" />
                <Button onClick={hello("react")} text="react" />
                <Button onClick={hello("function")} text="function" />
                
            </div>
            <Footer />
        </div>

    )
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
)

