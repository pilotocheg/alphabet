import React from 'react';

export class LetterBtn extends React.Component {
  constructor() {
    super();

    this.state = {}
  }

  componentWillMount() {
    this.setState({
      letterValue: this.props.letter,
      picName: this.props.picName,
      word: this.props.word,
      sound: this.props.sound
    })
  }

  takeData() {
    this.props.getValues(this.state.letterValue, this.state.picName, this.state.word, this.state.sound);
  }

  render() {
    return(
      <button
        className="letters"
        onClick={ this.takeData.bind(this) }
      >
        { this.state.letterValue }
      </button>
    )
  }
}

export class MainLetter extends React.Component{
  letterAnimation(duration) {
    const letter = this.mainLetter;
    letter.style.opacity = 0;
    let x = -100, y = 0;
    const start = performance.now();
    const frame = (timestamp) => {
      const progress = timestamp - start;
      y += (progress <= duration / 2) ? -progress : progress - duration / 2;
      letter.style.opacity = Math.min(progress / duration, 1);
      letter.style.transform = `translate(${Math.min(x + progress / (duration / 100), 0)}%, ${Math.min(y / 350, 0)}%)`;
      if (progress <= duration) {
        requestAnimationFrame(frame);
      }
    }
    requestAnimationFrame(frame);
  }

  componentDidMount() {
    if(this.props.mode === 'game') {
      this.letterAnimation(700);
    }
  }

  componentWillReceiveProps(props) {
    if(props.mode !== 'learn' || props.renderPic || this.props.handleSound !== props.handleSound) return;
    this.letterAnimation(700);
  }
  render() {
    return (
      <div
        ref={e => this.mainLetter = e}
        className="main-letter"
        id={this.props.id}
      >
        { this.props.bigLetter }
      </div>
    )
  }
}

export class Pic extends React.Component{
  startAnimation(duration) {
    const pic = this.pic;
    pic.style.opacity = 0;
    const start = performance.now();
    const frame = (timestamp) => {
      const progress = timestamp - start;
      pic.style.opacity = Math.min(progress / duration, 1);
      if (progress <= duration) {
        requestAnimationFrame(frame);
      }
    }
    requestAnimationFrame(frame);
  }

  componentWillReceiveProps(props) {
    if (this.props.handleSound !== props.handleSound) return;
    this.startAnimation(700);
  }

  render() {
    return (
      <img
        src={ this.props.src }
        ref={e => this.pic = e}
      />
    )
  }
}

export class Word extends React.Component{

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
    }
    requestAnimationFrame(frame);
  }

  componentDidMount() {
    if(this.props.mode === 'game') {
      this.startAnimation(700);
    }
  }

  componentWillReceiveProps(props) {
    if(this.props.mode !== 'learn' || this.props.handleSound !== props.handleSound) return;
    this.startAnimation(700);
  }
  render() {
    return (
      <p
        ref={e => this.word = e}
        id={this.props.id}
        className="word"
        dangerouslySetInnerHTML={ { __html: this.props.word } }
      ></p>
    )
  }
}