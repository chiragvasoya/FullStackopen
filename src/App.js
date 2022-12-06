import './App.css';
import { useState } from 'react';

const Display = ({vote, type}) => {
  if (isNaN(vote)) {
    return (
    <div>{type} : 0</div>
    )
  } 
  if (type === 'Positive') {
    return (
    <div>{type} : {vote} %</div>
    )
  } 
 return (
  <div>{type} : {vote}</div>
 )
}

const Button = ({value, handleClick}) =>  <button onClick={handleClick}>{value}</button>

const History = ({buttonPress}) => {
  if(buttonPress.length === 0) {
    return (
      <div>
        No button Press History
      </div>
    )
  }
  return (
    <div>{buttonPress.join(' ')}</div>
  )
}


const App = () => {

   const [good, setGood] = useState(0);
   const [bad, setBad] = useState(0);
   const [neutral, setNeutral] = useState(0);
   const [avg, setAvg] = useState(0);
   const total = good + bad + neutral;

   const goodClick = () => {
    setGood(good + 1);
    setAvg(avg + 1);
   }

   const badClick = () => {
    setBad(bad + 1);
    setAvg(avg - 1);
   }

   const neutralClick = () => {
    setNeutral(neutral + 1);
    setAvg(avg);
   }


  return (
    <div>
      <h2>Feedback App</h2>
      <Button handleClick={goodClick} value="Good" />
      <Button handleClick={badClick} value="Bad" />
      <Button handleClick={neutralClick} value="Neutral" />
      <h2>Statstics</h2>
      <Display vote={good} type="Good" />
      <Display vote={bad} type="Bad" />
      <Display vote={neutral} type="Neutral" />
      <Display vote={total} type="All" />
      <Display vote={avg/total} type="Avg" />
      <Display vote={good/total} type="Positive" />
      {/* <History buttonPress={allClicks}  /> */}
    </div>
  );
  }

export default App;

