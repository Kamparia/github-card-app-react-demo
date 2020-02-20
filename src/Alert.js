import React from 'react';

// Alert - stateless component
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

export default Alert;
