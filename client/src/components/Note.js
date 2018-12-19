import React from 'react';
import {connect} from 'react-redux'
import {deleteNote} from '../reducers/notes'
import {Header, Button, Container, Table} from 'semantic-ui-react'

class Note extends React.Component {

  render() {
    const { note, dispatch } = this.props
    return (
      <Container>
        <Header>{note.title}</Header>
        <p>{note.description}</p>
        <Button>Edit</Button>
        <Button onClick={() => dispatch(deleteNote())}>Delete</Button>
      </Container>
    )
  }
}

const mapStateToProps = (state, props) => {
  return { note: state.notes.find( n => n.id === parseInt(props.match.params.id)) }
}
export default connect(mapStateToProps)(Note);