import React from 'react';
import { LetterBtn, MainLetter, Pic, Word } from './main-app-components';
// import MainLetter from './main-app-components';
// import Pic from './main-app-components';
// import Word from './word';
import mainData  from '../main_data';
import images from '../../images/*';
// import sounds from '../../sounds/*';
// import { main_sound } from '../../sounds/main_sound';

export default class MainApp extends React.Component {
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

  render() {
    return(
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
    )
  }
}