import React from 'react'
import AddPersonForm from './components/AddPersonForm'
import PeopleList from './components/PeopleList'

function App() {
  const [ people, setPeople ] = React.useState([])
  
  React.useEffect(() => {
      setPeople([ { name: "James" }])
  }, [])
  
  function addPerson(newPerson) {
     setPeople([...people, newPerson])
  }

  
  return (
      <div>
          <AddPersonForm addPerson={addPerson} />
          <PeopleList people={people} />
      </div>
  )
  
}

export default App