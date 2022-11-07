import { useState } from "react";

const Title = ({ text }) => {
  return <h1>{text}</h1>;
};

const Button = ({ fun, text }) => {
  return (
    <>
      <button onClick={fun}>{text}</button>
    </>
  );
};

const Text = ({ text, value }) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  );
};

const Statistics = ({ ratings }) => {
  if (ratings.all == 0) {
    return (
      <>
        <Title text={"statistics"} />
        <p>No feedback was given</p>
      </>
    );
  }

  return (
    <>
      <Title text={"statistics"} />
      <table>
        <Text text={"good"} value={ratings.good} />
        <Text text={"neutral"} value={ratings.neutral} />
        <Text text={"bad"} value={ratings.bad} />
        <Text text={"all"} value={ratings.all} />
        <Text text={"average"} value={ratings.average} />
        <Text text={"positive"} value={ratings.positive} />
      </table>
    </>
  );
};

function App() {
  const [ratings, setRatings] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0,
    average: 0,
    positive: 0,
  });

  const handleGood = () => {
    const newGood = ratings.good + 1;
    const newAll = ratings.all + 1;

    const newOverall = {
      ...ratings,
      good: newGood,
      all: newAll,
      average: (newGood - ratings.bad) / newAll,
      positive: (newGood / newAll) * 100,
    };

    setRatings(newOverall);
  };

  const handleNeutral = () => {
    const newNeutral = ratings.neutral + 1;
    const newAll = ratings.all + 1;

    const newOverall = {
      ...ratings,
      neutral: newNeutral,
      all: newAll,
      average: (ratings.good - ratings.bad) / newAll,
      positive: (ratings.good / newAll) * 100,
    };

    setRatings(newOverall);
  };

  const handleBad = () => {
    const newBad = ratings.bad + 1;
    const newAll = ratings.all + 1;

    const newOverall = {
      ...ratings,
      bad: newBad,
      all: newAll,
      average: (ratings.good - newBad) / newAll,
      positive: (ratings.good / newAll) * 100,
    };

    setRatings(newOverall);
  };

  return (
    <div>
      <Title text={"give feedback"} />
      <Button fun={handleGood} text={"good"} />
      <Button fun={handleNeutral} text={"neutral"} />
      <Button fun={handleBad} text={"bad"} />

      <Statistics ratings={ratings} />
    </div>
  );
}

export default App;
