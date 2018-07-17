import React from 'react';
import LetterBtn from './letter-btn';
import GameBtn from './control-btns/game-btn';
import SoundBtn from './control-btns/sound-btn';
import AbcBtn from './control-btns/abc-btn';
import MainLetter from './main-letter';
import Pic from './pic';
import Word from './word';
import mainData  from '../main_data';
import images from '../../images/*';

export default class MainContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      mode: 'learn',
      isSound: true
    }
  }
  
  getValues(letter, picName, word) {
    const colorWord = word.replace(letter, `<span>${letter}</span>`)
    this.setState({
      letter: letter,
      picName: images[picName + '.png'],
      word: colorWord
    })
  }

  changeAppMode(modeName) {
    this.setState({
      mode: modeName
    })
  }

  changeSound() {
    this.setState({
      isSound: !this.state.isSound
    }, () => {
      console.log(this.state.isSound);
      
    })
  }

  render() {
    return(
      <div id="main-div">
        <div id="btn-container">
          <SoundBtn changeSound={ this.changeSound.bind(this) } />
          {/* <AbcBtn changeAppMode={ this.changeAppMode.bind(this) } /> */}
          {/* <GameBtn changeMode={ this.changeMode.bind(this) } /> */}
        </div>
        <div id="main-container">
          <MainLetter bigLetter={ this.state.letter }/>
          <div id="picture">
            <Pic src={ this.state.picName }/>
            <Word word={ this.state.word }/>
          </div>
          <div id="buttons-container">
            { mainData.map((el) => {
              return <LetterBtn
                key={ el.letter }
                letter={ el.letter }
                picName={el.pic}
                word={el.word}
                getValues={ this.getValues.bind(this) }
              />
            }) }
          </div>
        </div>
      </div>
    )
  }
}