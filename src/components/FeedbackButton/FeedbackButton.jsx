import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  render() {
    // console.log("gf");
    return (
      <>
        <button onClick={() => this.props.onLeaveFeedback('good')}>good</button>
        <button onClick={() => this.props.onLeaveFeedback('neutral')}>
          neutral
        </button>
        <button onClick={() => this.props.onLeaveFeedback('bad')}>bad</button>
      </>
    );
  }
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
