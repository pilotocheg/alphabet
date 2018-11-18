import React, { Component, PropTypes } from 'react';

export default class MainLetter extends Component {
  static propTypes = {
    mode: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    bigLetter: PropTypes.string.isRequired,
    renderPic: PropTypes.bool,
    handleSound: PropTypes.bool,
  }

  static defaultProps = {
    renderPic: false,
    handleSound: false,
  }

  componentDidMount() {
    if (this.props.mode === 'game') {
      this.letterAnimation(700);
    }
  }

  componentWillReceiveProps({ mode, renderPic, handleSound }) {
    if (
      mode !== 'learn' ||
      renderPic ||
      this.props.handleSound !== handleSound
    ) return;
    this.letterAnimation(700);
  }

  letterAnimation(duration) {
    const letter = this.mainLetter;
    letter.style.opacity = 0;
    const x = -100;
    let y = 0;
    const start = performance.now();
    const frame = (timestamp) => {
      const progress = timestamp - start;
      y += (progress <= duration / 2) ? -progress : progress - duration / 2;
      letter.style.opacity = Math.min(progress / duration, 1);
      letter.style.transform = `translate(${Math.min(x + progress / (duration / 100), 0)}%, ${Math.min(y / 350, 0)}%)`;
      if (progress <= duration) {
        requestAnimationFrame(frame);
      }
    };
    requestAnimationFrame(frame);
  }

  render() {
    return (
      <div
        ref={(e) => { this.mainLetter = e; }}
        className="main-letter"
        id={this.props.id}
      >
        { this.props.bigLetter }
      </div>
    );
  }
}
