import React from 'react';
import { LetterBtn, MainLetter, Pic, Word } from './learn-app-components';
import mainData  from '../main_data';
import images from '../../images/**.png';
import sounds from '../../sounds/**.wav';
import main_word from '../../sounds/main_word.wav';
import ReactAudioPlayer from 'react-audio-player';

export default class LearnApp extends React.Component {
  constructor() {
    super();

    this.state = {
      isLetterMount: false,
      isPicMount: false
    }
  }
  
  getValues(letter, picName, word, soundName) {
    const colorWord = word.replace(letter, `<span>${letter}</span>`)
    this.setState({
      letter: letter,
      picName: images[picName],
      word: colorWord,
      sound: sounds[soundName],
      sound2: sounds[soundName + '_w']
    })
  }

  isLetterMount(value) {
    this.setState({
      isLetterMount: value
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
              sound={el.sound}
              getValues={ this.getValues.bind(this) }
            />
          }) }
        </div>
        <ReactAudioPlayer
          src={this.state.sound}
          autoPlay
        />
      </div>
    )
  }
}