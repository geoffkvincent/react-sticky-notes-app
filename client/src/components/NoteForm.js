import React from 'react'
import {connect} from 'react-redux'
import {addNote} from '../reducers/notes'
import { Form, Container } from 'semantic-ui-react'

class NoteForm extends React.Component {
  state = { title: '', description: '' }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    const { title, description } = this.state
    const note = { title, description, complete: false }
    dispatch(addNote(note))
    this.setState({ title: '', description: ''})
    this.props.history.push('/')
  }

  render() {
    const { title, description } = this.state
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
            New
          </Form.Button>
        </Form>
      </Container>
    )
  }
}

export default connect()(NoteForm)