import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Word extends Component {
  componentDidMount() {
    if (this.props.mode === 'game') {
      this.startAnimation(700);
    }
  }

  componentWillReceiveProps({ handleSound }) {
    if (this.props.mode !== 'learn' || this.props.handleSound !== handleSound) return;
    this.startAnimation(700);
  }

  startAnimation(duration) {
    const word = this.word;
    word.style.opacity = 0;

    const start = performance.now();
    const frame = (timestamp) => {
      const progress = timestamp - start;
      word.style.opacity = Math.min(progress / duration, 1);
      if (progress <= duration) {
        requestAnimationFrame(frame);
      }
    };
    requestAnimationFrame(frame);
  }

  render() {
    return (
      <p
        ref={(e) => { this.word = e; }}
        id={this.props.id}
        className="word"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: this.props.word }}
      />
    );
  }
}

Word.propTypes = {
  mode: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  word: PropTypes.string.isRequired,
  handleSound: PropTypes.bool,
};

Word.defaultProps = {
  handleSound: false,
};
