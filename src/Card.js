import React from 'react';

// Card - stateless component
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

export default Card;
