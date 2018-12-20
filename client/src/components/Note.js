import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteNote} from '../reducers/notes'
import {Header, Button, Container} from 'semantic-ui-react'

class Note extends React.Component {

  handleDelete = () => {
    const { note, dispatch } = this.props
    dispatch(deleteNote(note.id))
    this.props.history.push('/')
  }

  render() {
    const { note } = this.props
    return (
      <Container>
        <Header>{note.title}</Header>
        <p>{note.description}</p>
        <Link to={{ pathname: `/notes/${note.id}/edit`, state: { note }}}>
          <Button>Edit</Button>
        </Link>
        <Button onClick={this.handleDelete}>Delete</Button>
      </Container>
    )
  }
}

const mapStateToProps = (state, props) => {
  return { note: state.notes.find( n => n.id === parseInt(props.match.params.id)) }
}

export default connect(mapStateToProps)(Note);
