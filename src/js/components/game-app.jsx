import React from 'react';
import { MainLetter, Word } from './learn-app-components';
import { StartDiv, RandomImage, StarImg } from './game-app-components';
import mainData  from '../main_data';
import images from '../../images/*';
import starImg from '../../img/star.png';

export default class GameApp extends React.Component {
  constructor() {
    super();

    this.state = {
      start: false,
      isTrue: false,
      letter: '',
      counter: 0,
      starsArr: [starImg, starImg, starImg]
    }
  }

  handleStart() {
    if (this.state.counter === 3) {
      console.log('ok');
      this.setState({counter: 0});
    }
    this.setState({ start: true });
    this.onGameStart();
  }

  isTrueCallback(value) {
    this.setState({ isTrue: value, counter: this.state.counter += 1, });
    setTimeout(() => {
      this.setState({
        start: false,
        isTrue: false
      })
    }, 3000)
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
      letterNum: letterNum,
      numbersArr: numbersArr.sort((a, b) => a - b)
    })
  }

  render() {
    return (
      <div className="main-container for-game">
        {
          !this.state.start 
            ? 
          <StartDiv 
            handleStart={this.handleStart.bind(this)} 
            counter={this.state.counter}
          />
            :
          <div>
            <div id="game-letter-container">
              <MainLetter id="game-letter" bigLetter={ this.state.letter }/>
              { !this.state.isTrue || <Word id="game-word" word={this.state.word}/> }
            </div>
            <div id="pics-container">
              {
                this.state.numbersArr.map(item => (
                  <RandomImage
                    isTrue={this.state.isTrue} 
                    key={item}
                    src={images['pic_' + (item + 1) + '.png']} 
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
      </div>
    )
  }
}