import React from 'react'
import { connect } from 'react-redux'

function PeopleList(props) {
    let listOfPeople = props.people.map((person, index) => <li key={person.index}>{person.name}</li>)
    return (
        <ul>
            {listOfPeople}
        </ul>
    )
}

function mapStateToProps(state) {
    return {
        people: state.people
    }
}

export default connect(mapStateToProps)(PeopleList)