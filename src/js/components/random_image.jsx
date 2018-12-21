/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RandomImage extends Component {
  componentDidMount() {
    this.startAnimation(700);
  }

  handleClick(e) {
    const picStyle = e.target.style;
    if (!this.props.isTrue) {
      this.setState({
        isTrue: this.props.letterNum === this.props.trueNum,
      }, () => {
        this.props.isTrueCallback(this.state.isTrue);
        picStyle.background = this.state.isTrue ? '#8ec63b' : 'red';
        picStyle.border = !this.state.isTrue || '2px solid #F9911A';
      });
    }
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
        ref={(e) => { this.pic = e; }}
        src={this.props.src}
        onClick={this.handleClick.bind(this)}
        onMouseLeave={(e) => {
          if (e.target.style.background === 'red') {
            e.target.style.background = 'none';
          }
        }}
        alt="random"
      />
    );
  }
}

RandomImage.propTypes = {
  letterNum: PropTypes.number.isRequired,
  trueNum: PropTypes.number.isRequired,
  isTrue: PropTypes.bool.isRequired,
  isTrueCallback: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};
