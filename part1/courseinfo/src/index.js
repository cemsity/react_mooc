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
            <Part part={props.parts[0].name} exercise={props.parts[0].exercise}/>
            <Part part={props.parts[1].name} exercise={props.parts[1].exercise}/>
            <Part part={props.parts[2].name} exercise={props.parts[2].exercise}/>
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
            <p>Number of exercises {props.parts[0].exercise + props.parts[1].exercise + props.parts[2].exercise + 3}</p>
        </div>
    )
}

const App = () => {
    const course = {
        name:'Half Stack application development',
        parts: [
            {
                name:  'Fundamentals of React',
                exercise: 10
            },
            {
                name: 'Using props to pass data',
                exercise: 7
            },
            {
                name: 'State of a component',
                exercise: 14
            }
       ]
    }

    
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));