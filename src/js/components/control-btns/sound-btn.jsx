import React from 'react';

export default class SoundBtn extends React.Component{
  render() {
    return (
      <button 
      onClick={ this.props.changeSound }
      id="sound">
        <i className="fas fa-volume-up"></i>
      </button>
    )
  }
}