import './App.css';
import { useState } from 'react';

const Anecdote = ({votes, anecdotes}) => {

  const maxVote = Math.max(...votes);
  const maxIndex = votes.indexOf(maxVote);
  if (maxVote === 0) {
  return (
    <p>No Votes yet</p>
  )
  }
  return (
    <p>{ anecdotes[maxIndex] }</p>
  )
}

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ];

  const anecdotesLength = anecdotes.length;

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(new Array(anecdotesLength).fill(0));   //set array with length 7 and fill with 0 values


  const randDisplay = () => {
    setSelected(Math.floor(Math.random()* anecdotesLength));
  }

  const voteCount = () => {
    const newVotes = [...vote];
    newVotes[selected] += 1;
    setVote(newVotes);
  }

  return (
    <div>
      
       <p>{ anecdotes[selected] }</p>
       <p>Count: { vote[selected] }</p>

       <button onClick={voteCount}>Vote</button>
       <button onClick={randDisplay}>Next Anecdotes</button>

       <h2>Most Votes</h2>
       <Anecdote votes={vote}  anecdotes={anecdotes} />
    
    </div>
  );
  }

export default App;

