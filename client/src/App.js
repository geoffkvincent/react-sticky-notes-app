import React from 'react'
import { Route, Switch } from 'react-router-dom';
import NoteForm from './components/NoteForm'
import Navbar from './components/Navbar'
import FetchNotes from './components/FetchNotes'
import styled from 'styled-components'


const App = () => (
  <AppContainer>
    <Navbar />
    <Switch>
      <Route path='/' component={FetchNotes} />
      <Route exact path="/note/:id/edit" component={NoteForm} />
    </Switch>
  </AppContainer>  
)

const AppContainer = styled.div `
  background: linear-gradient(to bottom right, rgb(0, 255, 98), black)
`

export default App;
