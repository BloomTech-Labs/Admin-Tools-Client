import React, { Component } from 'react';
import PullRequestItem from './PullRequestItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPrs } from '../actions';

class ListOfPullRequests extends Component {

  componentDidMount = () => {
    this.props.getPrs();
  };

  render() {
    return (
      <div>
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

const mapDispatchToProps = dispatch => bindActionCreators({ getPrs }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListOfPullRequests);

