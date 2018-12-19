import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom';
import NoteForm from './components/NoteForm'
import Navbar from './components/Navbar'
import FetchNotes from './components/FetchNotes'


const App = () => (
  <Fragment>
    <Navbar />
    <Switch>
      <Route path='/' component={FetchNotes} />
      
      <Route exact path="/note/:id/edit" component={NoteForm} />
    </Switch>
  </Fragment>  
)

export default App;
