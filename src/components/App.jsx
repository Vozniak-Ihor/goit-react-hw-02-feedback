import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackButton from "./FeedbackButton/FeedbackButton"

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickBtn = type => {
    this.setState(prevState => ({ [type]: prevState[type] + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        <FeedbackButton onClickBtn={this.onClickBtn}/>
        <h2>Statistics</h2>
        {this.state.good === 0 &&
        this.state.neutral === 0 &&
        this.state.bad === 0 ? (
          <h4>There is no feedback</h4>
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            // total={countTotalFeedback(this.state)}
            // positivePercentage={countPositiveFeedbackPercentage(this.state)}
          />
        )}
      </>
    );
  }
}
