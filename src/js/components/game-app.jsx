import React from 'react';
import { MainLetter } from './learn-app-components';
import { StartDiv } from './game-app-components';
import mainData  from '../main_data';
import images from '../../images/*';

export default class GameApp extends React.Component {
  constructor() {
    super();

    this.state = {
      start: false,
      letter: ''
    }
  }

  handleStart() {
    this.setState({
      start: true
    })
    this.onGameStart()
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
    this.setState({
      letter: mainData[letterNum].letter,
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
          <StartDiv handleStart={this.handleStart.bind(this)} />
            :
          <div>
            <MainLetter id="game-letter" bigLetter={ this.state.letter }/>
            <div id="pics-container">
              {
                this.state.numbersArr.map(item => (
                  <img 
                    src={images['pic_' + (item + 1) + '.png']} 
                    letterNum={item}
                  />
                ))
              }
            </div>
          </div>
        }
      </div>
    )
  }
}