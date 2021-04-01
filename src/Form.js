import React, { Component } from 'react';
import axios from 'axios';

// Form component
class Form extends Component {
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
                  if(err.message === 'Request failed with status code 404'){
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

export default Form;
