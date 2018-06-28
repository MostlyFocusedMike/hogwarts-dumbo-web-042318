import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';

import HogList from './HogList'

class App extends Component {

state = {
  hogs: [],
}

componentDidMount() {
  // We don't really need to do this
  this.setState({
    hogs
  })
}

  render() {
    return (
      <div className="App">
        <Nav />
        <HogList hogs={this.state.hogs}/>

      </div>
    )
  }
}

export default App;
