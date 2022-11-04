const Header = (props) => <h1>{props.course}</h1>;

const Content = (props) => {
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <>
      <Part part={part1} exercise={exercises1} />
      <Part part={part2} exercise={exercises2} />
      <Part part={part3} exercise={exercises3} />
    </>
  );
};

const Part = (props) => (
  <p>
    {props.part} {props.exercise}
  </p>
);

const Footer = (props) => <p>Number of exercises {props.total}</p>;

const App = () => {
  const course = "Half Stack application development";
  const totalExercises = 31;

  return (
    <div>
      <Header course={course} />
      <Content />
      <Footer total={totalExercises} />
    </div>
  );
};
export default App;
