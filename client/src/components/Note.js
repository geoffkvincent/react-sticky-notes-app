import React from 'react';
import {connect} from 'react-redux'
import {Header, Button, Container, Table} from 'semantic-ui-react'

const Note = ({note}) => {
  return (
    <Container>
      
      <Header>{note.title}</Header>
      <p>{note.description}</p>
      <Button>Edit</Button>
      <Button>Delete</Button>
    </Container>
  )
}

const mapStateToProps = (state, props) => {
  return { note: state.notes.find( n => n.id === parseInt(props.match.params.id))}
}
export default connect(mapStateToProps)(Note);