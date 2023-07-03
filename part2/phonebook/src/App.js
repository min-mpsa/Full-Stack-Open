import { useState } from 'react'
import Filter from './components/Filter'
import ContactForm from './components/ContactForm'
import PersonsList from './components/PersonsList'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterKey, setFilter] = useState('')

  const addContact = (event) => {
    event.preventDefault()
    const contactObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    if (persons.some(person => person.name === newName))
      alert(`${newName} is already added to the phonebook`)
    else
      setPersons(persons.concat(contactObject))
      setNewName('')
  }  

  const handleNameChange = (event) => setNewName(event.target.value)

  const handleNumberChange = (event) => setNewNumber(event.target.value)

  const handleFilterKey = (event) => setFilter(event.target.value)

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filterKey.toLowerCase()))

  console.log(persons)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterKey={filterKey} handler={handleFilterKey} />
      <ContactForm 
        submitHandler={addContact} 
        name={newName}
        handleNameChange={handleNameChange}
        number={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <PersonsList persons={personsToShow} />
    </div>
  )
}

export default App