import React from 'react';
import { Link } from "react-router-dom";
import { soundTrack } from '../../sounds/music-track.mp3';

export default class ControlBtns extends React.Component{
  constructor() {
    super();

    this.sound = new Audio(soundTrack);
  }
  render() {
    return (
      <div id="btn-container">
        <button 
          // onClick={ this.props.changeSound }
          id="sound"
        >

            {/* <i className="fas fa-volume-off"></i> */}
            <i className="fas fa-volume-up"></i>
          
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
            <i class="fas fa-home"></i>
          </button>
        </Link>
      </div>
    )
  }
}
