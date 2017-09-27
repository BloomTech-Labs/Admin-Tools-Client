import React, { Component } from 'react';
import PullRequestItem from './PullRequestItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPrs, deletePr } from '../actions';
import './ListOfPullRequest.css';

class ListOfPullRequests extends Component {

  componentDidMount = () => {
    this.props.fetchPrs();
  };

  render() {
    if (this.props.prError) return <p>Sorry, there was an error fetching data</p>;
    return (
      <div className="list-pr">
        {this.props.prs.map((pr, i) => {
          return <PullRequestItem key={i} prBody={pr} deletePr={this.props.deletePr}/>;
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

const mapDispatchToProps = dispatch => bindActionCreators({ fetchPrs, deletePr }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListOfPullRequests);

