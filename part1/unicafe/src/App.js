import React, {useState} from 'react';
import './App.css';


const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button> 
)

const Feedback = ({funcs}) => {
    return (
      <div>
        <h1>Give Feedback</h1>
        <Button onClick={funcs[0]} text="Good" />
        <Button onClick={funcs[1]} text="Neutral" />
        <Button onClick={funcs[2]} text="Bad" />
      </div>
    )
}
const Statistic = ({name, value}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({stats, display}) => {
  if (!display) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No Feedback Given</p>
      </div>
    )
  }
  const report = stats.map((item, key) => {
    return (
      <Statistic name={item.name} value={item.data} key={key}/>    
    )  
  })
  return (
    <div>
      <h1>Statistics</h1>
      <table>

        <tbody>
          {report}
        </tbody>
        
      </table>
    </div>
    )
  }

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [score, setScore] = useState(0)
  const [display, setDisplay] = useState(false)
  const handleGood = () => {
    setGood(good + 1)
    setScore(score + 1)
    setAll(all+1)
    setDisplay(true)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
    setDisplay(true)
  }
  const handleBad = () => {
    setBad(bad + 1)
    setScore(score - 1)
    setAll(all + 1)
    setDisplay(true)
  }
  const percentage = (numer, denom) => {
    let percent = ((numer / denom )* 100)
    return (`${percent} %`) 
  }
  const stats = [
    {name: "good",
    data: good},
    {name: "neutral",
    data: neutral},
    {name: "bad",
    data: bad},
    {name: "all",
    data: all},
    {name: "average",
    data: (score / all)},
    {name: "positive",
    data: percentage(good, all)},
  ]

  return (
    <div>
      <Feedback funcs={[ handleGood, handleNeutral, handleBad ]} />
      <Statistics stats={stats} display={display}/>
    </div>
  )
}

export default App;
