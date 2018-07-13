import React from 'react';

export default class LetterBtn extends React.Component {
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