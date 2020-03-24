// Action Types
export const FETCH_PEOPLE = "FETCH_PEOPLE"
export const ADD_PERSON = "ADD_PERSON"

// Action Creators
export function fetchPeople(people) {
    // Action
    return {
        type: FETCH_PEOPLE,
        payload: people
    }
}

export function addPerson(person) {
    return {
        type: ADD_PERSON,
        payload: person
    }
}

