import React from 'react';
import PropTypes from 'prop-types';

/**
 * This component renders button with different alphabet letters
 */
const LetterBtn = ({
  letter,
  picName,
  word,
  sound,
  getValues,
}) => (
  <button
    className="letters"
    onClick={() => getValues(letter, picName, word, sound)}
  >
    {letter}
  </button>
);

LetterBtn.propTypes = {
  letter: PropTypes.string.isRequired, // letter value
  picName: PropTypes.string.isRequired, // name of picture to render to
  word: PropTypes.string.isRequired, // word that contains current letter
  sound: PropTypes.string.isRequired, // sound of current word
  getValues: PropTypes.func.isRequired, // func thet set current letter and related values to the parent's component state
};

export default LetterBtn;
