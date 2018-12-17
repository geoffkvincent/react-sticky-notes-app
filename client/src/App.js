import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom';
import Notes from './components/Notes'
import Note from './components/Note'
import Form from './components/Form'


const App = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={Notes} />
      <Route exact path ="/notes/new" component={Form} />
      <Route exact path="/note/:id" component={Note} />
      <Route exact path="/note/:id/edit" component={Form} />
    </Switch>
  </Fragment>  
)

export default App;
