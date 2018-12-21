import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactAudioPlayer from 'react-audio-player';
import Word from './word';
import MainLetter from './main_letter';
import StartMessageWindow from './start_message_window';
import StarImg from './star_img';
import RandomImage from './random_image';
import mainData from '../main_data';
import images from '../../images/**.png';
import starImg from '../../img/star.png';
import sounds from '../../sounds/words/**.mp3';
import awesomeSounds from '../../sounds/awesome/**.mp3';
import ovationSound from '../../sounds/ovation.mp3';
import alertSound from '../../sounds/not_right.mp3';

export default class GameApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      start: false,
      isTrue: false,
      letter: '',
      counter: 0,
      starsArr: [starImg, starImg, starImg],
      awesomeSoundNumber: Math.floor(Math.random() * 4) + 1,
    };
  }

  onGameStart() {
    const letterNum = Math.floor(Math.random() * 33);
    const numbersArr = [letterNum];
    for (let i = 0; i < 2; i += 1) {
      const randomDigit = Math.floor(Math.random() * 33);
      if (numbersArr[i] !== randomDigit && randomDigit !== letterNum) {
        numbersArr.push(randomDigit);
      } else {
        i -= 1;
      }
    }
    const letter = mainData[letterNum].letter;
    const word = mainData[letterNum].word;

    this.setState({
      letter,
      word: word.replace(letter, `<span>${letter}</span>`),
      sound: sounds[`sound_${letterNum + 1}`],
      sound2: sounds[`sound_${letterNum + 1}_w`],
      letterNum,
      numbersArr: numbersArr.sort((a, b) => a - b),
    });
  }

  handleStart() {
    if (this.state.counter === 3) {
      this.setState({ counter: 0, hideStars: false });
    }
    this.setState({ start: true });
    this.onGameStart();
  }

  handleNextGame() {
    setTimeout(() => {
      this.setState({
        start: false,
        isTrue: false,
        hideStars: this.state.counter === 3,
        awesomeSoundNumber: Math.floor(Math.random() * 4) + 1,
      });

      if (this.state.counter === 3) {
        this.ovationSound.audioEl.play();
      }
    }, 500);
  }

  isTrueCallback(value) {
    this.setState({ isTrue: value }, () => {
      if (this.state.isTrue) {
        this.setState({
          counter: this.state.counter += 1,
        }, () => this.awesomeSound.audioEl.play());
      } else {
        this.alertSound.audioEl.play();
      }
    });
  }

  playLetterSound() {
    this.letterSound.audioEl.play();
  }

  playWordSound() {
    this.wordSound.audioEl.play();
  }

  render() {
    return (
      <div className="main-container for-game">
        {
          !this.state.start ?
            <StartMessageWindow
              handleStart={this.handleStart.bind(this)}
              counter={this.state.counter}
            />
            :
            <div>
              <div id="game-letter-container">
                <MainLetter id="game-letter" mode="game" bigLetter={this.state.letter} />
                { !this.state.isTrue || <Word id="game-word" mode="game" word={this.state.word} /> }
              </div>
              <div id="pics-container">
                {
                  this.state.numbersArr.map(item => (
                    <RandomImage
                      isTrue={this.state.isTrue}
                      key={item}
                      src={images[`pic_${item + 1}`]}
                      letterNum={item}
                      trueNum={this.state.letterNum}
                      isTrueCallback={this.isTrueCallback.bind(this)}
                    />
                  ))
                }
              </div>
            </div>
        }
        <div id="stars-div">
          {
            this.state.hideStars
            ||
            this.state.starsArr.map((img, i) => (
              <StarImg
                src={img}
                key={Math.random()}
                ownNumber={(i + 1)}
                counter={this.state.counter}
              />
            ))
          }
        </div>
        <ReactAudioPlayer
          src={awesomeSounds[`awesome_${this.state.awesomeSoundNumber}`]}
          ref={(el) => { this.awesomeSound = el; }}
          onEnded={this.playLetterSound.bind(this)}
          muted={this.props.mute}
        />
        <ReactAudioPlayer
          src={this.state.sound}
          ref={(el) => { this.letterSound = el; }}
          onEnded={this.playWordSound.bind(this)}
          muted={this.props.mute}
        />
        <ReactAudioPlayer
          src={this.state.sound2}
          ref={(el) => { this.wordSound = el; }}
          onEnded={this.handleNextGame.bind(this)}
          muted={this.props.mute}
        />
        <ReactAudioPlayer
          src={ovationSound}
          ref={(el) => { this.ovationSound = el; }}
          muted={this.props.mute}
        />
        <ReactAudioPlayer
          src={alertSound}
          ref={(el) => { this.alertSound = el; }}
          muted={this.props.mute}
        />
      </div>
    );
  }
}

GameApp.propTypes = {
  mute: PropTypes.bool, // Is app in sound or muted mode
};

GameApp.defaultProps = {
  mute: false,
};
