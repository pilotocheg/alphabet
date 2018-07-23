import React from 'react';
import { Link } from "react-router-dom";
import soundTrack from '../../sounds/music-track.mp3';
import ReactAudioPlayer from 'react-audio-player';

export default class ControlBtns extends React.Component{
  constructor() {
    super();

    this.state = {
      isPlay: true,
    }
  }

  handleSound() {
    this.setState({
      isPlay: !this.state.isPlay
    }, () => {
      !this.state.isPlay ? this.rap.audioEl.pause() : this.rap.audioEl.play();
    })
  }

  render() {
    return (
      <div id="btn-container">
        <Link to="/">
          <button id="home">
            <i className="fas fa-home"></i>
          </button>
        </Link>
        <Link to="/learn">
          <button id="abc">
            <i className="fas fa-book-open"></i>
          </button>
        </Link>
        <Link to="/game">
          <button id="game">
            <i className="fas fa-gamepad"></i>
          </button>
        </Link>
        <button 
          onClick={ this.handleSound.bind(this) }
          id="sound"
        >
          {
            this.state.isPlay ?
            <i className="fas fa-volume-up"></i>
              :
            <i className="fas fa-volume-off"></i>
          }
        </button>
        <ReactAudioPlayer
          src={soundTrack}
          volume={0.5}
          autoPlay
          loop
          ref={elem => this.rap = elem}
        />
      </div>
    )
  }
}
