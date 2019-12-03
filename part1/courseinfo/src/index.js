import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            <p>{props.part} {props.exercise}</p>
        </div>
    )
}

const Content = (props) => {

    return (
        <div>
            <Part part={props.parts[0].part} exercise={props.parts[0].exercise}/>
            <Part part={props.parts[1].part} exercise={props.parts[1].exercise}/>
            <Part part={props.parts[2].part} exercise={props.parts[2].exercise}/>
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
            <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
        </div>
    )
}

const App = () => {
    const course = 'Half Stack application development';
    const part1 = 'Fundamentals of React';
    const exercises1 = 10;
    const part2 = 'Using props to pass data';
    const exercises2 = 7;
    const part3 = 'State of a component';
    const exercises3 = 14;

    const parts = [
        {
            'part': part1,
            'exercise': exercises1
        },
        {
            'part': part2,
            'exercise': exercises2
        },
        {
            'part': part3,
            'exercise': exercises3
        },

    ]
    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total ex1={exercises1} ex2={exercises2} ex3={exercises3} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));