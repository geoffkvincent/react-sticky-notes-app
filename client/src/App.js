import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom';
import NoteList from './components/NoteList'
import Note from './components/Note'


const App = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={NoteList} />
      <Route path="/Note/id" component={Note} />
      
    </Switch>
  </Fragment>
  
)


export default App;
