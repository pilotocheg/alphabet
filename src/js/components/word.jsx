import React from 'react';

export default class Word extends React.Component{
  render() {
    return (
      <p 
        id="word" 
        dangerouslySetInnerHTML={ { __html: this.props.word } }
      ></p>
    )
  }
}