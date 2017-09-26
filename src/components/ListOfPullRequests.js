import React, { Component } from 'react';
import PullRequestItem from './PullRequestItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPrs } from '../actions';
import './ListOfPullRequest.css';

class ListOfPullRequests extends Component {

  componentDidMount = () => {
    this.props.fetchPrs();
  };

  render() {
    // if theres an error getting the pull requests it will display this html
    if (this.props.prError) return <p>Sorry, there was an error fetching pull requests</p>;
    return (
      <div className="list-pr">
        {this.props.prs.map((pr, i) => {
          return <PullRequestItem key={i} prBody={pr} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    prs: state.prs,
    prError: state.prError
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({ fetchPrs }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListOfPullRequests);

