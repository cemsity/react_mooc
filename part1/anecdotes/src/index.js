import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const make_points_state = () => {
  return anecdotes.map(() => 0 )

}

const Anecdote = ({anecdote, points}) => {
  return (
    <div>
      <p>{anecdote}</p>
      <p>has {points} votes</p>
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(make_points_state)
  const [voted, setVoted] = useState(false)
  const [top, setTop] = useState(0)

  const click_handler = () => {
    const anecdoteLength = props.anecdotes.length;
    setSelected(Math.floor(Math.random() * anecdoteLength))
    setVoted(false)
    setTop(points.indexOf(Math.max(...points)))
  }

  const vote = () => {
    if (!voted) {
      const newPoints = [...points]
      newPoints[selected] = newPoints[selected] + 1
      setPoints(newPoints)
      setVoted(true)
    }
  }
  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <Anecdote anecdote={props.anecdotes[selected]} points={points[selected]} />
      <button onClick={click_handler} >next anecdote</button>
      <button onClick={vote}>Vote</button> 
      <h1>Top Anecdote</h1>
      <Anecdote anecdote={props.anecdotes[top]} points={points[top]} />


    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)