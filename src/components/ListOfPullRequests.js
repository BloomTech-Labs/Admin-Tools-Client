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
    prs: state.prs
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({ fetchPrs }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListOfPullRequests);

