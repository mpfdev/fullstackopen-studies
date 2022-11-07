import { useState } from "react";

const Display = ({ anecdote, onClick, onVote, votes }) => {
  return (
    <>
      <Heading text={"Anecdote of the day"} />
      <h4>{anecdote}</h4>
      <Button onClick={onVote} text={"vote"} />
      <Button onClick={onClick} text={"random anecdote"} />
      <h4>has {votes} votes</h4>

      <Heading text={"Anecdote with most votes"} />
    </>
  );
};

const Button = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  );
};

const Heading = ({ text }) => {
  return <h1>{text}</h1>;
};

const MostVotes = ({ anecdote }) => {
  return <h4>a{anecdote}</h4>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(0);

  const [points, setPoints] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  });

  const handleAnecdote = () => {
    const selected = Math.floor(Math.random() * anecdotes.length);

    setSelected(selected);
  };

  const handleVotes = () => {
    const newVotes = {
      ...points,
    };

    newVotes[selected] += 1;

    mostVotes();
    setPoints(newVotes);
  };

  const mostVotes = () => {
    const point = Object.values(points);
    let indexMax = point.indexOf(Math.max(...point));

    return <MostVotes anecdote={anecdotes[indexMax]} />;
  };

  return (
    <div>
      <Display
        anecdote={anecdotes[selected]}
        votes={points[selected]}
        onClick={handleAnecdote}
        onVote={handleVotes}
      />
    </div>
  );
};
export default App;
