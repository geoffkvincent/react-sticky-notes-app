import React from 'react';
import { connect } from 'react-redux' 
import { Link } from 'react-router-dom'
import { getNotes } from '../reducers/notes'
import {Card} from 'semantic-ui-react'

class Notes extends React.Component {
  componentDidMount() {
    this.props.dispatch(getNotes())
  }
  
  render() {
    return (
      null
    )
  }
}

const mapStateToProps = (state) => {
  return { notes: state.notes }
}

export default connect(mapStateToProps)(Notes);