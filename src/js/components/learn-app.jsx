import React from 'react';
import { LetterBtn, MainLetter, Pic, Word } from './learn-app-components';
import mainData  from '../main_data';
import images from '../../images/**.png';
import sounds from '../../sounds/words/**.mp3';
import main_word from '../../sounds/main_word.mp3';
import ReactAudioPlayer from 'react-audio-player';

export default class LearnApp extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  getValues(letter, picName, word, soundName) {
    if (this.state.renderPic) this.state.renderPic = false;
    this.mainSound.audioEl.play();
    const colorWord = word.replace(letter, `<span>${letter}</span>`)
    this.setState({
      letter: letter,
      picName: images[picName],
      word: colorWord,
      sound: sounds[soundName],
      sound2: sounds[soundName + '_w']
    })
  }

  onPlayLetterSound() {
    this.letterSound.audioEl.play();
  }

  onPlayWordSound() {
    this.setState({
      renderPic: true
    })
    this.wordSound.audioEl.play();
  }

  render() {
    return(
      <div className="main-container">
        <MainLetter
          id="learn-letter"
          mode="learn"
          bigLetter={ this.state.letter }
          renderPic={this.state.renderPic}
          handleSound={this.props.mute}
        />
        <div id="picture">
          <Pic
            src={ this.state.renderPic ? this.state.picName : "" }
            handleSound={this.props.mute}
          />
          <Word
            id="learn-word"
            mode="learn"
            word={ this.state.renderPic ? this.state.word : "" }
            handleSound={this.props.mute}
          />
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
          src={main_word}
          ref={elem => this.mainSound = elem}
          onEnded={this.onPlayLetterSound.bind(this)}
          muted={this.props.mute}
        />
        <ReactAudioPlayer
          src={this.state.sound}
          ref={elem => this.letterSound = elem}
          onEnded={this.onPlayWordSound.bind(this)}
          muted={this.props.mute}
        />
        <ReactAudioPlayer
          src={this.state.sound2}
          ref={elem => this.wordSound = elem}
          muted={this.props.mute}
        />
      </div>
    )
  }
}