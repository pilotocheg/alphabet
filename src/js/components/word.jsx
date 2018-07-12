import React from 'react';

export default class Word extends React.Component{
  render() {
    return (
      <p id="word">
        { this.props.word }
      </p>
    )
  }
}