import ReactAudioPlayer from 'react-audio-player';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Word from './word';
import Pic from './learn_pic';
import MainLetter from './main_letter';
import LetterBtn from './letter_btn';
import mainData from '../main_data';
import images from '../../images/**.png';
import sounds from '../../sounds/words/**.mp3';
import mainWord from '../../sounds/main_word.mp3';

export default class LearnApp extends Component {
  constructor() {
    super();

    this.state = {
      letter: '',
    };

    this.onPlayLetterSound = this.onPlayLetterSound.bind(this);
    this.onPlayWordSound = this.onPlayWordSound.bind(this);
    this.getValues = this.getValues.bind(this);
  }
  onPlayLetterSound() {
    this.letterSound.audioEl.play();
  }

  onPlayWordSound() {
    this.setState({ renderPic: true });
    this.wordSound.audioEl.play();
  }

  getValues(letter, picName, word, soundName) {
    if (this.state.renderPic) {
      this.state.renderPic = false;
    }
    this.mainSound.audioEl.play();

    this.setState({
      letter,
      picName: images[picName],
      word: word.replace(letter, `<span>${letter}</span>`),
      sound: sounds[soundName],
      sound2: sounds[`${soundName}_w`],
    });
  }

  render() {
    const { mute } = this.props;
    const {
      renderPic,
      picName,
      letter,
      sound2,
      sound,
      word,
    } = this.state;

    return (
      <div className="main-container">
        <MainLetter
          id="learn-letter"
          mode="learn"
          bigLetter={letter}
          renderPic={renderPic}
          handleSound={mute}
        />
        <div id="picture">
          <Pic
            src={renderPic ? picName : ''}
            handleSound={mute}
          />
          <Word
            id="learn-word"
            mode="learn"
            word={renderPic ? word : ''}
            handleSound={mute}
          />
        </div>
        <div id="buttons-container">
          { mainData.map(el => (
            <LetterBtn
              key={el.letter}
              letter={el.letter}
              picName={el.pic}
              word={el.word}
              sound={el.sound}
              getValues={this.getValues}
            />))
          }
        </div>
        <ReactAudioPlayer
          src={mainWord}
          ref={(elem) => { this.mainSound = elem; }}
          onEnded={this.onPlayLetterSound}
          muted={mute}
        />
        <ReactAudioPlayer
          src={sound}
          ref={(elem) => { this.letterSound = elem; }}
          onEnded={this.onPlayWordSound}
          muted={mute}
        />
        <ReactAudioPlayer
          src={sound2}
          ref={(elem) => { this.wordSound = elem; }}
          muted={mute}
        />
      </div>
    );
  }
}

LearnApp.propTypes = {
  mute: PropTypes.bool,
};

LearnApp.defaultProps = {
  mute: false,
};
