import React from 'react'
import {connect} from 'react-redux'
import {Route,Switch} from 'react-router-dom'
import Notes from './Notes'
import Note from './Note'
import NoteForm from './NoteForm'
import {getNotes} from '../reducers/notes'
import {Loader, Segment, Dimmer } from 'semantic-ui-react'
import styled from 'styled-components'

class FetchNotes extends React.Component {
  state = { loaded: false }

  componentDidMount() {
    this.props.dispatch(getNotes(this.setLoaded))
  }

  setLoaded = () => this.setState({loaded: true})
  
  render() {
    const { loaded } = this.state
    if (loaded) {
      return (
        <AppContainer>
          <Switch>
            <Route exact path="/" component={Notes} />
            <Route exact path ="/notes/new" component={NoteForm} />
            <Route exact path="/notes/:id" component={Note} />
            <Route exact path="/notes/:id/edit" component={NoteForm} />
          </Switch>
        </AppContainer>
      )
    } else {
      return (
        <Segment>
          <Dimmer>
            <Loader />
          </Dimmer>
        </Segment>
      )
    }
  }
}

const AppContainer = styled.div `
  background: linear-gradient(to bottom right, rgb(0, 255, 98), black)
`

export default connect()(FetchNotes)