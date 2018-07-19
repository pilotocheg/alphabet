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
    })
  }

  takeData() {
    this.props.getValues(this.state.letterValue, this.state.picName, this.state.word);
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
  render() {
    return (
      <div className="main-letter" id={this.props.id}>
        { this.props.bigLetter }
      </div>
    )
  }
}

export class Pic extends React.Component{
  render() {
    return (
      <img src={ this.props.src }/>
    )
  }
}

export class Word extends React.Component{
  render() {
    return (
      <p 
        id="word" 
        dangerouslySetInnerHTML={ { __html: this.props.word } }
      ></p>
    )
  }
}