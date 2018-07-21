import React from 'react';
import { Link } from "react-router-dom";
import { soundTrack } from '../../sounds/music-track.mp3';

export default class ControlBtns extends React.Component{
  constructor() {
    super();

    this.soundTrack = document.getElementById("soundTrack");
    this.state = {
      isPlay: true,
    }
  }

  handleSound() {
    this.setState({
      isPlay: !this.state.isPlay
    })
    // this.soundTrack.pause();
  }

  render() {
    return (
      <div id="btn-container">
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
        <Link to="/">
          <button id="home">
            <i className="fas fa-home"></i>
          </button>
        </Link>
        <audio src={soundTrack} autoPlay loop type="sound/mp3" id="soundTrack"></audio>
      </div>
    )
  }
}
