import React from 'react';
import { connect } from 'react-redux' 
import { Link } from 'react-router-dom'
import { Card, Container, Header, Button } from 'semantic-ui-react'
import styled from 'styled-components'

class Notes extends React.Component {
  
  renderNotes = () => {
    return this.props.notes.map( note => 
      <CardStyle style={{backgroundColor: 'yellow', borderColor: 'black'}} key={note.id}>
        <Card.Content >
          <Card.Header>{note.title}</Card.Header>
          <Card.Description>{note.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link to={`/notes/${note.id}`}>
            <Button style={{backgroundColor: 'rgb(0, 255, 98)', color: 'black'}}>View</Button>
          </Link>
        </Card.Content>
      </CardStyle>
    )
  }
  
  render() {
    return (
      <Container>
        <Header as="h1">Sticky Notes</Header>
        <Link to={{ pathname: "/notes/new", state:}}>
         <Button color="black" style={{ color: 'rgb(0, 255, 98)' }}>Create Note</Button>
        </Link>
        <Card.Group itemsPerRow={4}>
          {this.renderNotes()}
        </Card.Group>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { notes: state.notes }
}

const ButtonS = styled(Button)`
  color: rgb(0, 255, 98);
`

const CardStyle = styled(Card) `
  border-width: 50px !important;
  border-color: green;
`

export default connect(mapStateToProps)(Notes);
