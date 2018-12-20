import React from 'react'
import { Route, Switch } from 'react-router-dom';
import NoteForm from './components/NoteForm'
import Navbar from './components/Navbar'
import FetchNotes from './components/FetchNotes'
import {Container} from 'semantic-ui-react'
import styled from 'styled-components'


const App = () => (
  <Container>
    <Navbar />
    <Switch>
      <Route path='/' component={FetchNotes} />
      <Route exact path="/note/:id/edit" component={NoteForm} />
    </Switch>
  </Container>  
)



export default App;
