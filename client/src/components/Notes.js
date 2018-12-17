import React from 'react';
import { connect } from 'react-redux' 
import { Link } from 'react-router-dom'
import { getNotes } from '../reducers/notes'
import { Card, Container, Header, Button } from 'semantic-ui-react'

class Notes extends React.Component {
  componentDidMount() {
    this.props.dispatch(getNotes())
  }

  renderNotes = () => {
    return this.props.notes.map( note => 
      <Card key={note.id}>
        <Card.Content>
          <Card.Header>{note.title}</Card.Header>
          <Card.Description>{note.description}</Card.Description>
        </Card.Content>
      </Card>
    )
  }
  
  render() {
    return (
      <Container>
        <Header as="h1">Sticky Notes</Header>
        <Link to="/notes/new">
         <Button>Create Note</Button>
        </Link>
        <Card.Group>
          {this.renderNotes()}
        </Card.Group>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { notes: state.notes }
}

export default connect(mapStateToProps)(Notes);