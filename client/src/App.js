import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom';
import Notes from './components/Notes'
import Note from './components/Note'


const App = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={Notes} />
      <Route path="/Note/id" component={Note} />
    </Switch>
  </Fragment>  
)

export default App;
