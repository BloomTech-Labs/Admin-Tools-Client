import React, { Component } from 'react'
import PullRequestItem from './PullRequestItem';

export default class ListOfPullRequests extends Component {
  constructor() {
    super();
    this.state = {
      prs: [],
    };
  }
  componentDidMount = () => {
   fetch('https://lambda-admin.herokuapp.com/pull-requests')
      .then((res) => {
        return res.json();
      })
      .then(newPrs => (this.setState({prs: newPrs})))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        {this.state.prs.map((pr) => {
          return <PullRequestItem prBody={pr}/>
        })}
      </div>
    )
  }
}
