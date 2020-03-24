import { ADD_PERSON, FETCH_PEOPLE } from './actions'

let initialState = []
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_PERSON:
            let newPerson = action.payload
            return [...state, newPerson]
        case FETCH_PEOPLE:
            let newPeople = action.payload
            return newPeople
    }
    return state
}
