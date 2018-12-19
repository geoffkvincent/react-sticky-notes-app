import React from 'react'
import {connect} from 'react-redux'
import {Route,Switch} from 'react-router-dom'
import Notes from './Notes'
import Note from './Note'
import NoteForm from './NoteForm'
import {getNotes} from '../reducers/notes'
import {Loader, Segment, Dimmer } from 'semantic-ui-react'

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
        <Switch>
          <Route exact path="/" component={Notes} />
          <Route exact path ="/notes/new" component={NoteForm} />
          <Route exact path="/notes/:id" component={Note} />
        </Switch>
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

export default connect()(FetchNotes)