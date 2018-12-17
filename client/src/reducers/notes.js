import axios from 'axios'

const NOTES = 'NOTES'
const ADD_NOTE = 'ADD_NOTE'
const UPDATE_NOTE = 'UPDATE_NOTE'
const DELETE_NOTE = 'DELETE_NOTE'

export const getNotes = () => {
  return (dispatch) => {
    axios.get('/api/notes')
      .then( res => dispatch({ type: NOTES, notes: res.data }) )
  }
}

export const addNote = (note) => {
  return (dispatch) => {
    axios.post('/api/notes')
      .then( res => dispatch({ type: ADD_NOTE, note: res.data }) )
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

