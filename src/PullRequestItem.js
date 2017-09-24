import React, { Component } from 'react';

export default class PullRequestItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div style={{ color: '#000000' }}>{this.props.prBody.title}</div>
      </div>
    );
  }
}
