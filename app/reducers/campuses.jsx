import axios from 'axios'

// ACTION TYPES
const GET_CAMPUSES = 'GET_CAMPUSES'
const WRITE_CAMPUS = 'WRITE_CAMPUS'

// ACTION CREATORS
export function getCampuses(campuses) {
    const action = { type: GET_CAMPUSES, campuses }
    return action
}

export function writeCampus(content) {
    const action = { type: WRITE_CAMPUS, content }
    return action
}

// THUNK CREATORS
export function fetchCampuses() {
    return function thunk(dispatch) {
        return axios.get('api/campuses')
            .then(res => res.data)
            .then(campuses => {
                const action = getCampuses(campuses)
                dispatch(action)
            })
    }
}

export function postCampus() {
    return function thunk (dispatch) {
        return axios.post('/api/campuses', message)
          .then(res => res.data)
          .then(newMessage => {
            const action = getMessage(newMessage);
            dispatch(action);
            socket.emit('new-message', newMessage);
          })
      }
}

// REDUCER
export default function reducer(state = [], action) {
    switch (action.type) {
        case GET_CAMPUSES:
            return action.campuses
        default:
            return state
    }
}