import { useState } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const [showSelected, setShowSelected] = useState("");
  const [showFiltered, setShowFiltered] = useState([]);

  const handleAddName = (e) => {
    e.preventDefault();

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    const indexPerson = persons.findIndex(
      (person) => personObject.name == person.name
    );

    indexPerson == -1
      ? setPersons(persons.concat(personObject))
      : alert(`${personObject.name} is already added to phonebook`);

    setNewName("");
  };

  const handleChangeName = (e) => {
    setNewName(e.target.value);
  };

  const handleChangeNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilter = (e) => {
    setShowSelected(e.target.value.toLowerCase());
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        filter shown with <input value={showSelected} onChange={handleFilter} />
      </div>

      <h3>Add a new</h3>
      <PersonForm
        nameValue={newName}
        onChangeName={handleChangeName}
        numberValue={newNumber}
        onChangeNumber={handleChangeNumber}
        onSubmit={handleAddName}
      />

      <h3>Numbers</h3>
      <Persons showFiltered={showFiltered} persons={persons} />
    </div>
  );
};

export default App;
