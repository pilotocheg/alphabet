import React, { PropTypes } from 'react';

export default class StarImg extends React.Component {
  static propTypes = {
    counter: PropTypes.number,
    ownNumber: PropTypes.number,
    src: PropTypes.string.isRequired,
  }

  static defaultProps = {
    counter: 0,
    ownNumber: 0,
  }

  constructor(props) {
    super(props);

    this.state = {
      opacity: 0,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.counter === this.props.ownNumber) {
      this.setState({
        opacity: 1,
      }, () => {
        if (!this.state.animDone) this.elemAnimation(700);
      });
    }
    if (!nextProps.counter) this.setState({ opacity: 0 });
  }

  elemAnimation(duration) {
    const pic = this.starPic;
    const start = performance.now();
    const frame = (timestamp) => {
      const progress = timestamp - start;
      const x = (progress <= duration / 2) ? progress : duration - progress;
      pic.style.transform = `scale(${Math.max(1 + x / 1000, 1)})`;
      if (progress <= duration) {
        requestAnimationFrame(frame);
      } else {
        this.setState({ animDone: true });
      }
    }
    requestAnimationFrame(frame);
  }

  render() {
    return (
      <img
        ref={(e) => { this.starPic = e; }}
        src={this.props.src}
        className="game-stars"
        style={{ opacity: this.state.opacity }}
        alt="star"
      />
    );
  }
}