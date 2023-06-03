import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
  render() {
    return (
      <>
        <div>
          <h1>{this.props.title}</h1>
          {this.props.children}
        </div>
      </>
    );
  }
}

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
