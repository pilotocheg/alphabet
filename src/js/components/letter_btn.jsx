import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LetterBtn extends Component {
  componentWillMount() {
    this.setState({
      letterValue: this.props.letter,
      picName: this.props.picName,
      word: this.props.word,
      sound: this.props.sound,
    });
  }

  takeData() {
    this.props.getValues(
      this.state.letterValue,
      this.state.picName,
      this.state.word,
      this.state.sound,
    );
  }

  render() {
    return (
      <button
        className="letters"
        onClick={this.takeData.bind(this)}
      >
        { this.state.letterValue }
      </button>
    );
  }
}

LetterBtn.propTypes = {
  letter: PropTypes.string.isRequired,
  picName: PropTypes.string.isRequired,
  word: PropTypes.string.isRequired,
  sound: PropTypes.string.isRequired,
  getValues: PropTypes.func.isRequired,
};
