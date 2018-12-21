import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Pic extends Component {
  componentWillReceiveProps({ handleSound }) {
    if (this.props.handleSound !== handleSound) return;
    this.startAnimation(700);
  }

  startAnimation(duration) {
    const pic = this.pic;
    pic.style.opacity = 0;

    const start = performance.now();
    const frame = (timestamp) => {
      const progress = timestamp - start;
      pic.style.opacity = Math.min(progress / duration, 1);
      if (progress < duration) {
        requestAnimationFrame(frame);
      }
    };
    requestAnimationFrame(frame);
  }

  render() {
    return (
      <img
        src={this.props.src}
        ref={(e) => { this.pic = e; }}
        alt=""
      />
    );
  }
}

Pic.propTypes = {
  handleSound: PropTypes.bool,
  src: PropTypes.string.isRequired,
};

Pic.defaultProps = {
  handleSound: false,
};
