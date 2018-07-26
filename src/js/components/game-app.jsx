import React from 'react';
import { MainLetter, Word } from './learn-app-components';
import { StartDiv, RandomImage, StarImg } from './game-app-components';
import mainData  from '../main_data';
import images from '../../images/**.png';
import starImg from '../../img/star.png';
import sounds from '../../sounds/words/**.wav';
import awesomeSounds from '../../sounds/awesome/**.wav';
import ovationSound from '../../sounds/ovation.wav';
import alertSound from '../../sounds/not_right.wav';
import ReactAudioPlayer from 'react-audio-player';

export default class GameApp extends React.Component {
  constructor() {
    super();

    this.state = {
      start: false,
      isTrue: false,
      letter: '',
      counter: 0,
      starsArr: [starImg, starImg, starImg],
      awesomeSoundNumber: Math.floor(Math.random() * 4) + 1
    }
  }

  handleStart() {
    if (this.state.counter === 3) {
      this.setState({counter: 0, hideStars: false});
    }
    this.setState({ start: true });
    this.onGameStart();
  }

  isTrueCallback(value) {
    this.setState({ isTrue: value }, () => {
      if (this.state.isTrue) {
        this.setState({
          counter: this.state.counter += 1,
        }, () => {
          try {
            this.awesomeSound.audioEl.play();
          } catch (err) {
            console.log(err);
          }
        })
      } else {
        this.alertSound.audioEl.play();
      }
    });
  }

  handleNextGame() {
    setTimeout(() => {
      this.setState({
        start: false,
        isTrue: false,
        hideStars: this.state.counter === 3,
        awesomeSoundNumber: Math.floor(Math.random() * 4) + 1
      })
      if (this.state.counter === 3) {
      this.ovationSound.audioEl.play();
      }
    }, 500)
  }
  onGameStart() {
    let letterNum = Math.floor(Math.random()* 33);
    let numbersArr = [letterNum];
    for (let i = 0; i < 2; i += 1) {
      let randomDigit = Math.floor(Math.random()* 33);
      if (numbersArr[i] !== randomDigit && randomDigit !== letterNum) {
        numbersArr.push(randomDigit);
      } else {
        i -= 1;
      }
    }
    const letter = mainData[letterNum].letter;
    const word = mainData[letterNum].word;
    this.setState({
      letter: letter,
      word: word.replace(letter, `<span>${letter}</span>`),
      sound: sounds['sound_' + (letterNum + 1)],
      sound2: sounds['sound_' + (letterNum + 1) + '_w'],
      letterNum: letterNum,
      numbersArr: numbersArr.sort((a, b) => a - b)
    })
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
          !this.state.start
          ? <StartDiv
              handleStart={this.handleStart.bind(this)}
              counter={this.state.counter}
            />
          : <div>
              <div id="game-letter-container">
                <MainLetter id="game-letter" mode="game" bigLetter={ this.state.letter }/>
                { !this.state.isTrue || <Word id="game-word" mode="game" word={this.state.word}/> }
              </div>
              <div id="pics-container">
                {
                  this.state.numbersArr.map(item => (
                    <RandomImage
                      isTrue={this.state.isTrue}
                      key={item}
                      src={images['pic_' + (item + 1)]}
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
                key={i}
                ownNumber={(i + 1)}
                counter={this.state.counter}
              />
            ))
          }
        </div>
        <ReactAudioPlayer
          src={awesomeSounds['awesome_' + this.state.awesomeSoundNumber]}
          ref={elem => this.awesomeSound = elem}
          onEnded={this.playLetterSound.bind(this)}
          muted={this.props.mute}
        />
        <ReactAudioPlayer
          src={this.state.sound}
          ref={elem => this.letterSound = elem}
          onEnded={this.playWordSound.bind(this)}
          muted={this.props.mute}
        />
        <ReactAudioPlayer
          src={this.state.sound2}
          ref={elem => this.wordSound = elem}
          onEnded={this.handleNextGame.bind(this)}
          muted={this.props.mute}
        />
        <ReactAudioPlayer
          src={ovationSound}
          ref={elem => this.ovationSound = elem}
          muted={this.props.mute}
        />
        <ReactAudioPlayer
          src={alertSound}
          ref={elem => this.alertSound = elem}
          muted={this.props.mute}
        />
      </div>
    )
  }
}