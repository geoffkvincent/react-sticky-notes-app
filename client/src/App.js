import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom';
import Notes from './components/Notes'
import Note from './components/Note'
import NoteForm from './components/NoteForm'
import Navbar from './components/Navbar'
import FetchNotes from './components/FetchNotes'

const App = () => (
  <Fragment>
    <Navbar />
    <Switch>
      
      <Route exact path="/" component={Notes} />
      <Route exact path ="/notes/new" component={NoteForm} />
      <Route exact path="/note/:id" component={Note} />
      <Route exact path="/note/:id/edit" component={NoteForm} />
    </Switch>
  </Fragment>  
)

export default App;
