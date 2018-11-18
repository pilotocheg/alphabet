import React, { PropTypes } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { Link } from 'react-router-dom';
import soundTrack from '../../sounds/music-track.mp3';

export default class ControlBtns extends React.Component {
  static propTypes = {
    isMutedCallback: PropTypes.func.isRequired,
  }

  constructor() {
    super();

    this.state = {
      muted: false,
      music: true,
    };
  }

  handleSound() {
    this.setState({
      muted: !this.state.muted,
    }, () => {
      this.props.isMutedCallback(this.state.muted);
    });
  }

  handleMusic() {
    if (this.state.muted) return;
    this.setState({
      music: !this.state.music,
    }, this.state.music ? this.rap.audioEl.play() : this.rap.audioEl.pause());
  }

  render() {
    return (
      <div id="btn-container">
        <Link to="/alphabet" href="/alphabet">
          <button id="home">
            <i className="fas fa-home" />
          </button>
        </Link>
        <Link to="/alphabet/learn" href="/alphabet/learn">
          <button id="abc">
            <i className="fas fa-book-open" />
          </button>
        </Link>
        <Link to="/alphabet/game" href="/alphabet/game">
          <button id="game">
            <i className="fas fa-gamepad" />
          </button>
        </Link>
        <button
          style={{ color: this.state.muted ? '#d12a7b' : '#fff' }}
          onClick={this.handleSound.bind(this)}
          id="sound"
        >
          {
            !this.state.muted
            ? <i className="fas fa-volume-up" />
            : <i className="fas fa-volume-off" />
          }
        </button>
        <button
          onClick={this.handleMusic.bind(this)}
          style={{ color: this.state.music ? '#fff' : '#d12a7b' }}
        >
          <i className="fas fa-music" />
        </button>
        <ReactAudioPlayer
          src={soundTrack}
          volume={0.2}
          autoPlay
          loop
          ref={(elem) => { this.rap = elem; }}
          muted={this.state.muted}
        />
      </div>
    );
  }
}
