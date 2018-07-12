import React from 'react';

export default class MainLetter extends React.Component{
  render() {
    return (
      <div id="main-letter">
        { this.props.bigLetter }
      </div>
    )
  }
}