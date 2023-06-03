import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Notification extends Component {
  render() {
    return (
      <>
        <h4>{this.props.message}</h4>
      </>
    );
  }
}

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
