import React, { Component } from 'react';

// Alert - stateless component
class Alert extends Component {
  render() {
    const messages = this.props.errorMessages;
    return(
      <div>
        {messages.length === 0 ? (
          <div></div>
        ) : (
          messages.map(profile => {
            return (
              <div className="alert alert-danger alert-dismissible fade show" role="alert">
                {messages}
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

export default Alert;
