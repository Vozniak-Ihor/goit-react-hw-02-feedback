import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button className={css.button} onClick={() => onLeaveFeedback('good')}>good</button>
      <button className={css.button} onClick={() => onLeaveFeedback('neutral')}>neutral</button>
      <button className={css.button} onClick={() => onLeaveFeedback('bad')}>bad</button>
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
