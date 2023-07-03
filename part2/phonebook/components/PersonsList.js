const PersonsList = ({persons}) => (
    <div>
      <h2>Numbers</h2>
      {persons.map(person => 
        <li key={person.id}>{person.name} {person.number}</li>)}
    </div>
)

export default PersonsList