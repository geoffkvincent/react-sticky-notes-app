import React from 'react'
import {connect} from 'react-redux'
import {addNote, updateNote} from '../reducers/notes'
import { Form, Container } from 'semantic-ui-react'

class NoteForm extends React.Component {
  state = { title: '', description: '' }

  componentDidMount(){
    const {title, description} = this.state
    const {id} = this.props.match.params

    if (id)
      this.setState({ title, description})
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    const { id } = this.props.match.params
    const { title, description } = this.state
    const note = { title, description, complete: false, id }
    if (id) {
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
    const {id} = this.props.match.params
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
