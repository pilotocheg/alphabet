import React from 'react';
import LetterBtn from './letter-btn';
import GameBtn from './game-btn';
import SoundBtn from './sound-btn';
import AbcBtn from './abc-btn';
import MainLetter from './main-letter';
import Pic from './pic';
import Word from './word';
import mainData  from '../main_data';
import images from '../../images/*';

export class BtnContainer extends React.Component {
  render() {
    return (
      <div id="btn-container">
        <AbcBtn />
        <SoundBtn />
        <GameBtn />
      </div>
    )
  }
}


export default class MainContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      letterValue: '',
      picName: '',
      word: '',
    }
  }

  getLetterValue(value) {
    this.setState({
      letterValue: value
    })
  }

  getPictureName(picName) {
    this.setState({
      picName: images[picName + '.png']
    })
  }

  getWord(word) {
    this.setState({
      word: word
    })
  }

  render() {
    return(
      <div id="main-container">
        <MainLetter bigLetter={ this.state.letterValue }/>
        <div id="picture">
          <Pic src={ this.state.picName }/>
          <Word word={ this.state.word }/>
        </div>
        <div id="buttons-container">
          { mainData.map((el) => {
            return <LetterBtn
              key={ mainData.indexOf(el) }
              letter={ el.letter }
              
              picName={el.pic}
              word={el.word}
              getLetterValue={ this.getLetterValue.bind(this) }
              getPictureName={this.getPictureName.bind(this) }
              getWord={ this.getWord.bind(this) }
            />
          }) }
        </div>
      </div>
    )
  }
}