import { useState } from "react";

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Content = ({ parts }) => {
  return (
    <>
      <Part part={parts[0].name} exercise={parts[0].exercises} />
      <Part part={parts[1].name} exercise={parts[1].exercises} />
      <Part part={parts[2].name} exercise={parts[2].exercises} />
    </>
  );
};

const Part = ({ part, exercise }) => {
  return (
    <p>
      {part} {exercise}
    </p>
  );
};

const Footer = ({ parts }) => {
  //todo
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises;

  return <p>Number of exercises {total}</p>;
};

const Display = ({ counter }) => {
  return (
    <>
      <div> Left: {counter.left}</div>
      <div> Right: {counter.right}</div>
    </>
  );
};

const Button = ({ funOnClick, text }) => {
  return (
    <>
      <button onClick={funOnClick}>{text}</button>
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });

  const handlePlusLeft = () => {
    setClicks({
      left: clicks.left + 1,
      right: clicks.right,
    });
  };

  const handleReset = () => {
    setClicks({
      left: 0,
      right: 0,
    });
  };

  const handlePlusRight = () => {
    setClicks({
      left: clicks.left,
      right: clicks.right + 1,
    });
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Footer parts={course.parts} />
      <Display counter={clicks} />
      <Button funOnClick={handlePlusLeft} text={"Left"} />
      <Button funOnClick={handleReset} text={"Reset"} />
      <Button funOnClick={handlePlusRight} text={"Right"} />
    </div>
  );
};
export default App;
