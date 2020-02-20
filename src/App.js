import React, { Component } from 'react';

import Alert from './Alert.js'
import Card from './Card.js'
import Form from './Form.js'

import './App.css';

/*******************************
      The GitHub Cards App 
 *******************************/

/**
 * ROOT COMPONENT
 */
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      appTitle: 'The GitHub Cards App',
      apiUrl: 'https://api.github.com/',    
      profiles: [],
      errorMessages: []
    }
  }
 
  addProfile = (profileData) => {
    // destructuring assignment
    const profiles = [...this.state.profiles, profileData];
    this.setState({profiles: profiles});
  };

  //event handler function for form submission
  delProfile = (id) => {
    const profiles = this.state.profiles;
    const newProfiles = profiles.filter(profile => profile.id !== id);
    this.setState({profiles: newProfiles});
  };

  addMessage = (errorMessage) => {
    //console.log(errorMessage);
    // destructuring assignment
    const messages = [...this.state.errorMessages, errorMessage];
    this.setState({errorMessages: messages});
  };

  delMessages = () => {
    const messages = [];
    this.setState({errorMessages: messages});
  };

  render() {
    return (
      <div>
        <div className="header">{this.state.appTitle}</div>
        <Alert errorMessages={this.state.errorMessages} delMessages={this.delMessages} />
        <Form addProfile={this.addProfile} addMessage={this.addMessage} />      
        <Card delProfile={this.delProfile} profiles={this.state.profiles}/>
      </div>
    );
  }
}

export default App;
