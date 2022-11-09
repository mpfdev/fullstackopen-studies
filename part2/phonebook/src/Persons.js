const Persons = ({ showFiltered, persons }) => {
  return (
    <>
      {showFiltered.length == 0
        ? persons.map((person) => {
            return (
              <p key={person.id}>
                {person.name}: {person.number}
              </p>
            );
          })
        : showFiltered.map((selected) => {})}
    </>
  );
};

export default Persons;
