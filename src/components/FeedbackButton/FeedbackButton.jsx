import React, { Component } from 'react';

class FeedbackButton extends Component {
  render() {
    return (
      <>
        <button onClick={() => this.props.onClickBtn('good')}>good</button>
        <button onClick={() => this.props.onClickBtn('neutral')}>neutral</button>
        <button onClick={() => this.props.onClickBtn('bad')}>bad</button>
      </>
    );
  }
}

export default FeedbackButton;
