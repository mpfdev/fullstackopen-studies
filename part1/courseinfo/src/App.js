const Header = (props) => {
  console.log(props.course.name);
  return <h1>{props.course.name}</h1>;
};

const Content = (props) => {
  console.log(props.parts);
  return (
    <>
      <Part
        part={props.parts.parts[0].name}
        exercise={props.parts.parts[0].exercises}
      />
      <Part
        part={props.parts.parts[1].name}
        exercise={props.parts.parts[1].exercises}
      />
      <Part
        part={props.parts.parts[2].name}
        exercise={props.parts.parts[2].exercises}
      />
    </>
  );
};

const Part = (props) => (
  <p>
    {props.part} {props.exercise}
  </p>
);

const Footer = (props) => {
  //todo
  const total =
    props.parts.parts[0].exercises +
    props.parts.parts[1].exercises +
    props.parts.parts[2].exercises;

  return <p>Number of exercises {total}</p>;
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

  return (
    <div>
      <Header course={course} />
      <Content parts={course} />
      <Footer parts={course} />
    </div>
  );
};
export default App;
