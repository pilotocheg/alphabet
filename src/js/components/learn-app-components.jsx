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
  letterAnimation() {
    const letter = this.mainLetter;
    let x = -100, y = 0;
    this.interval = setInterval(() => {
      if (x >= 0) return clearInterval(this.interval);

      y += (x < -50) ? -2 : 2;
      x += 1;
      letter.style.opacity = `${(100 + x) / 100}`;
      letter.style.transform = `translate(${x}%, ${y / 10}%)`;
    }, 7);
  }

  componentDidMount() {
    if(this.props.mode === 'game') {
      this.letterAnimation();
    }
  }

  componentWillReceiveProps(props) {
    if(props.mode !== 'learn' || props.renderPic || this.props.handleSound !== props.handleSound) return;
    this.letterAnimation();
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
  startAnimation() {
    let x = 0;
    this.interval = setInterval(() => {
      if (x >= 1) return clearInterval(this.interval);

      x += 0.01;
      this.pic.style.opacity = `${x}`;
    }, 7);
  }

  componentWillReceiveProps(props) {
    if (this.props.handleSound !== props.handleSound) return;
    this.startAnimation();
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

  startAnimation() {
    let x = 0;
    this.interval = setInterval(() => {
      if (x >= 1) return clearInterval(this.interval);

      x += 0.01;
      this.word.style.opacity = `${x}`;
    }, 7);
  }

  componentDidMount() {
    if(this.props.mode === 'game') {
      this.startAnimation();
    }
  }

  componentWillReceiveProps(props) {
    if(this.props.mode !== 'learn' || this.props.handleSound !== props.handleSound) return;
    this.startAnimation();
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