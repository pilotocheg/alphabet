import React from 'react';
import { LetterBtn, MainLetter, Pic, Word } from './learn-app-components';
import mainData  from '../main_data';
import images from '../../images/*.png';
// import sounds from '../../sounds/*';
// import { main_sound } from '../../sounds/main_sound';

export default class LearnApp extends React.Component {
  constructor() {
    super();

    this.state = {}
  }
  
  getValues(letter, picName, word) {
    const colorWord = word.replace(letter, `<span>${letter}</span>`)
    this.setState({
      letter: letter,
      picName: images[picName],
      word: colorWord
    })
  }

  render() {
    return(
      <div className="main-container">
        <MainLetter id="learn-letter" bigLetter={ this.state.letter }/>
        <div id="picture">
          <Pic src={ this.state.picName }/>
          <Word id="learn-word" word={ this.state.word }/>
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