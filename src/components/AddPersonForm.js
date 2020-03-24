import React from 'react'
import { connect } from 'react-redux'
import { addPerson } from '../store/people/actions'

function AddPersonForm(props) {
    const [ person, setPerson ] = React.useState({})
    
    function handleChange(event) {
        let newPerson = { 
            name: event.target.value 
        }
        setPerson(newPerson)
    }
    
    function handleSubmit(event) {
        // Prevents the default behavior of the submit event (refreshes page)
        event.preventDefault()
        
        props.boundAddPerson(person) 
        setPerson({ name: "" })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={person.name} />
            <button type="submit">Submit</button>
        </form>    
    )
}

const mapDipatchToProps = {
  boundAddPerson: addPerson
}

export default connect(null, mapDipatchToProps)(AddPersonForm)