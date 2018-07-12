import React from 'react';

export default class LetterBtn extends React.Component {
  constructor() {
    super();

    // this.state = {
    //   letterValue: this.props.letter,
    //   picName: this.props.picName,
    //   word: this.props.word,
    // }
  }

  componentWillMount() {
    this.setState({
      letterValue: this.props.letter,
      picName: this.props.picName,
      word: this.props.word,
    })
  }

  takeData() {
    this.props.getLetterValue(this.state.letterValue);
    this.props.getPictureName(this.state.picName);
    this.props.getWord(this.state.word);
  }

  render() {
    return(
      <button 
        className="letters"
        onClick={ this.takeData.bind(this) }
      >
        { this.props.letter }
      </button>
    )
  }
}