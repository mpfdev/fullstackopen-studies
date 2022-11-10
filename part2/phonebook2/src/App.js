import { useState } from 'react'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState([])

  const handleAddName = (event) => {
    event.preventDefault();

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    if (persons.some(person => person.name === personObject.name)) {
      alert(`${personObject.name} is already on the phonebook`);
    } else {
      setPersons(persons.concat(personObject));
    }

    setNewName("");

  }

  const handleChangeName = (event) => {
    setNewName(event.target.value)
  }

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddName}>
        <div>name: <input value={newName} onChange={handleChangeName} /></div>
        <div>number: <input value={newNumber} onChange={handleChangeNumber} /></div>
        <div><button type="submit">add</button> </div>
      </form>
      <h2>Numbers</h2>
      ...
      {
        persons.map(person => {
          return (<li key={person.name}>
            {person.name}: {person.number}
          </li>)
        })
      }
      <div>debug: {newName}</div>
    </div>
  )
}

export default App;
