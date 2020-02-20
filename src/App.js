import React from 'react';

import Alert from './Alert.js'
import Card from './Card.js'
import Form from './Form.js'

import './App.css';

/*******************************
      The GitHub Cards App 
 *******************************/

// Alert component
/*
class Alert extends React.Component {
  render() {
    return(
      <div>
        {this.props.errorMessages.length === 0 ? (
          <div></div>
        ) : (
          this.props.errorMessages.map(profile => {
            return (
              <div className="alert alert-danger alert-dismissible fade show" role="alert">
                {this.props.errorMessages}
                <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => this.props.delMessages()}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            );        
          })
        )}
      </div>
    );
  }
}
*/

// Card Component
/*
class Card extends React.Component { 
  // render
  render() {
    return (
      <div>
        {this.props.profiles.length === 0 ? (
          <h3 className="no-record-txt">Card is empty...</h3>
        ) : (
          this.props.profiles.map(profile => {
            return (
             <div key={profile.id} className="card">
                <div className="github-profile">         
                  <img className="img img-thumbnail" src={profile.avatar_url} alt={profile.name} />
                  <div className="info">
                    <div className="name">{profile.name}</div>
                    <div className="bio">{profile.bio}</div>
                    <div className="profile_url"><a href={profile.html_url} target="_blank">View GitHub Profile</a></div>
                  </div>
                  <button type="button" className="remove-card close" aria-label="Close" onClick={() => this.props.delProfile(profile.id)}>
                    <span aria-hidden="true" className="">&times;</span>
                  </button>           
                </div>
              </div>
            );        
          })
        )}
      </div>
    );
  } 
}
*/

// Form component
/*
class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userName: ''
    }
  }

  //event handler function for form submission
  handleSubmit = async (event) => {
    event.preventDefault();
    
    // fetch data using the axios library
    const submit = this.props;
    const api_endpoint = `https://api.github.com/users/${this.state.userName}`;
    await axios.get(api_endpoint).then(function (response) {
                  submit.addProfile(response.data);
                }).catch(function (err) {
                  if(err.message == 'Request failed with status code 404'){
                    submit.addMessage('GitHub account/username not found.');
                  } else {
                    submit.addMessage(err.message);  
                  }            
                });
    
    //reset form input string
    this.setState({userName: ''});
  };
  
  // render
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group">
          <input 
            type="text" 
            className="form-control"
            value={this.state.userName}
            onChange={event => this.setState({userName: event.target.value})}
            placeholder="GitHub username (e.g. Twitter)"
            required
          /> 
          <div className="input-group-append">
            <button className="btn btn-dark" type="submit">Add Card</button>
          </div>        
        </div>
      </form>
    );
  } 
}
*/

/**
 * ROOT COMPONENT
 */
class App extends React.Component {
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
