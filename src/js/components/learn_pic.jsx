import React, { Component, PropTypes } from 'react';

export default class Pic extends Component {
  static propTypes = {
    handleSound: PropTypes.bool,
    src: PropTypes.string.isRequired,
  }

  static defaultProps = {
    handleSound: false,
  }
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
