import React, { Component } from 'react';
import './PullRequestItem.css';

export default class PullRequestItem extends Component {
  render() {
    return (
      <div className="pull-request-item">
        <div style={{ color: '#000000' }}>
          <div className="user-info">
            <img className="avatar" alt="avatar" src={this.props.prBody.user.avatar_url} />
            <p>{this.props.prBody.user.login}</p>
          </div>
          <strong>{this.props.prBody.name}</strong> {/*some of the prs have name and others have title*/}
          <strong>{this.props.prBody.title}</strong>
          </div>
      </div>
    );
  }
}
