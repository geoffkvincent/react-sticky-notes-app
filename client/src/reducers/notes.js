import axios from 'axios'

const NOTES = 'NOTES'
const ADD_NOTE = 'ADD_NOTE'
const UPDATE_NOTE = 'UPDATE_NOTE'
const DELETE_NOTE = 'DELETE_NOTE'

export const getNotes = (cb) => {
  debugger
  return (dispatch) => {
    axios.get('/api/notes')
      .then( res => {
        dispatch({ type: NOTES, notes: res.data })
        cb()
        debugger 
      })
  }
}

export const addNote = (note) => {
  debugger
  return (dispatch) => {
    axios.post('/api/notes', {note})
      .then( res => dispatch({ type: ADD_NOTE, note: res.data }) )
      debugger
  }
}

export const updateNote = (note) => {
  return (dispatch) => {
    axios.put(`/api/notes/${note.id}`, { note })
      .then( res => dispatch({ type: UPDATE_NOTE, note: res.data}))
  }
}

export const deleteNote = (id) => {
  return (dispatch) => {
    axios.delete(`/api/notes/${id}`)
      .then( res => dispatch({ type: DELETE_NOTE, id}))
  }
}

export default ( state = [], action ) => {
  switch(action.type) {
    case NOTES:
      return action.notes
    case ADD_NOTE:
    debugger
      return [ action.note, ...state ]
    case UPDATE_NOTE:
      return state.map( n => {
        if( action.note.id === n.id )
          return action.note
        return n
      })
    case DELETE_NOTE:
      return state.filter( n => n.id !== action.id )
    default:
      return state
  }
}