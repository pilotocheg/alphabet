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
    this.mainLetter.animate([
      {transform: 'translate(-100%, 0)', opacity: '0'},
      {transform: 'translate(-50%, -10%)', opacity: '0.5'},
      { transform: 'translate(0, 0)', opacity: '1' },
    ],{duration: 700})
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
    this.pic.animate([
      { opacity: 0 },
      { opacity: 1 }
    ], { duration: 700 })
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
    this.word.animate([
      {opacity: 0},
      {opacity: 1}
    ], {duration: 700})
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