import React from 'react'
import {connect} from 'react-redux'
import {addNote, updateNote} from '../reducers/notes'
import { Form, Container } from 'semantic-ui-react'

class NoteForm extends React.Component {
  state = { title: '', description: '' }

  componentDidMount(){
    debugger
    const {id, title, description} = this.props.location.state.note
    if (id)
      this.setState({ title, description})
      debugger
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    const { id } = this.props.location.state.note
    const { title, description } = this.state
    const note = { title, description, complete: false, id }
    if (id) {
      debugger
      dispatch(updateNote(note))
      this.setState({ description: '', title: '' })
      this.props.history.push('/')
    } else {
      dispatch(addNote(note))
      this.setState({ description: '', title: '' })
      this.props.history.push('/')
    }
  }

  render() {
    const { title, description } = this.state
    // const {id} = this.props.location.state.note
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            name="title"
            placeholder="Title"
            label="Note Title:"
            value={title}
            onChange={this.handleChange}
          />
          <Form.Input
            name="description"
            placeholder="Decription"
            label="Note Description:"
            value={description}
            onChange={this.handleChange}
          />
          <Form.Button>
            {id ? 'Edit' : 'New'}
          </Form.Button>
        </Form>
      </Container>
    )
  }
}

export default connect()(NoteForm)
