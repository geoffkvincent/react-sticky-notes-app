import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'
// import Footer from './Footer'

const App = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Note" component={Note} />
      <Route component={NoMatch} />
    </Switch>
  </Fragment>
  
)


export default App;
