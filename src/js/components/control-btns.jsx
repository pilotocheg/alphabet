import React from 'react';
import { Link } from "react-router-dom";

export default class ControlBtns extends React.Component{
  render() {
    return (
      <div id="btn-container">
        <button 
          // onClick={ this.props.changeSound }
          id="sound"
        >
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
      </div>
    )
  }
}
