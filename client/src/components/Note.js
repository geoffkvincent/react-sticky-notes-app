import React from 'react';
import {connect} from 'react-redux'
import {deleteNote} from '../reducers/notes'
import {Header, Button, Container, Table} from 'semantic-ui-react'

class Note extends React.Component {

  handleDelete = () => {
    const { note, dispatch } = this.props
    dispatch(deleteNote(note.id))
    this.props.history.push('/')
  }

  render() {
    const { note, dispatch } = this.props
    return (
      <Container>
        <Header>{note.title}</Header>
        <p>{note.description}</p>
        <Button>Edit</Button>
        <Button onClick={this.handleDelete}>Delete</Button>
      </Container>
    )
  }
}

const mapStateToProps = (state, props) => {
  return { note: state.notes.find( n => n.id === parseInt(props.match.params.id)) }
}
export default connect(mapStateToProps)(Note);