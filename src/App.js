import './App.css';
import { useState } from 'react';

const Display = ({counter, type}) => <div>{type} Counter: {counter}</div>

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

   const [left, setLeft] = useState(0);
   const [right, setRight] = useState(0);
   const [allClicks, setAll] = useState([]);

   const leftClick = () => {  

      setLeft(left + 1);
      setAll([...allClicks, 'L']);
      // setAll(allClicks.concat('L'));
   }; 



   const rightClick = () => { 
      setRight(right + 1);
      setAll([...allClicks, 'R']);
      // setAll(allClicks.concat('R'))
   }
   
  
 
  return (
    <div>
      <Display counter={left} type="Left"/>
      <Button handleClick={leftClick} value="Left" />
      <Button handleClick={rightClick} value="Right" />
      <Display counter={right} type="Right" />
      <History buttonPress={allClicks}  />
    </div>
  );
  }

export default App;

