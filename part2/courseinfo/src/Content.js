import Part from "./Part";

const Content = ({ course }) => {
  const sum = course.reduce((acc, prev) => {
    return acc + prev.exercises;
  }, 0);

  return (
    <>
      {course.map((elem) => {
        return (
          <Part key={elem.id} text={elem.name} exercise={elem.exercises} />
        );
      })}
      <strong>total of {sum} exercises</strong>
    </>
  );
};

export default Content;
