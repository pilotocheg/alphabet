import React from 'react';
import { Link } from "react-router-dom";
import soundTrack from '../../sounds/music-track.mp3';
import ReactAudioPlayer from 'react-audio-player';

export default class ControlBtns extends React.Component{
  constructor() {
    super();

    this.state = {
      muted: false,
      music: true,
    }
  }

  handleSound() {
    this.setState({
      muted: !this.state.muted
    }, () => {
      this.props.isMutedCallback(this.state.muted);
    })
  }

  handleMusic() {
    if (this.state.muted) return;
    this.setState({
      music: !this.state.music
    }, () => {
      this.state.music ? this.rap.audioEl.play() : this.rap.audioEl.pause();
    })
  }

  render() {
    return (
      <div id="btn-container">
        <Link to="/alphabet">
          <button id="home">
            <i className="fas fa-home"></i>
          </button>
        </Link>
        <Link to="/alphabet/learn">
          <button id="abc">
            <i className="fas fa-book-open"></i>
          </button>
        </Link>
        <Link to="/alphabet/game">
          <button id="game">
            <i className="fas fa-gamepad"></i>
          </button>
        </Link>
        <button
          style={{ color: this.state.muted ? "#d12a7b" : "#fff" }}
          onClick={ this.handleSound.bind(this) }
          id="sound"
        >
          {
            !this.state.muted
            ? <i className="fas fa-volume-up"></i>
            : <i className="fas fa-volume-off"></i>
          }
        </button>
        <button
          onClick={this.handleMusic.bind(this)}
          style={{ color: this.state.music ? "#fff" : "#d12a7b" }}
        >
          <i className="fas fa-music"></i>
        </button>
        <ReactAudioPlayer
          src={soundTrack}
          volume={0.2}
          autoPlay
          loop
          ref={elem => this.rap = elem}
          muted={this.state.muted}
        />
      </div>
    )
  }
}
