import React from 'react';

export class LetterBtn extends React.Component {
  constructor() {
    super();

    this.state = {}
  }

  componentWillMount() {
    this.setState({
      letterValue: this.props.letter,
      picName: this.props.picName,
      word: this.props.word,
      sound: this.props.sound
    })
  }

  takeData() {
    this.props.getValues(this.state.letterValue, this.state.picName, this.state.word, this.state.sound);
  }

  render() {
    return(
      <button 
        className="letters"
        onClick={ this.takeData.bind(this) }
      >
        { this.state.letterValue }
      </button>
    )
  }
}

export class MainLetter extends React.Component{
  constructor() {
    super();

    this.state = {
      translateX: -100,
      translateY: 0,
      varForTranslateY: -0.2,
      opacity: 0
    }
  }
  letterAnimation() {
    this.interval = setInterval(() => {
      if(this.state.translateY <= -10) {
        this.setState({
          varForTranslateY: 0.2
        })
      }
      if (this.state.translateX >= 0) {
        clearInterval(this.interval)
        return;
      }
      this.setState({
        translateX: this.state.translateX += 1,
        translateY: this.state.translateY += this.state.varForTranslateY,
        opacity: this.state.opacity += 0.01
      })
    }, 1)
  }
  componentDidMount() {
    if(this.props.mode === 'game') {
      this.letterAnimation();
    }
  }
  
  componentWillReceiveProps(props) {
    if(props.mode !== 'learn' || props.renderPic) return;
    if (this.state.translateX >= 0) this.setState({
      translateX: -100,
      translateY: 0,
      opacity: 0,
      varForTranslateY: -0.2
    })
    this.letterAnimation();
  }
  render() {
    return (
      <div 
        style={{ transform: `translate(${this.state.translateX}%, ${this.state.translateY}%)`, opacity: this.state.opacity }}
        className="main-letter" 
        id={this.props.id}
      >
        { this.props.bigLetter }
      </div>
    )
  }
}

export class Pic extends React.Component{
  constructor() {
    super();

    this.state = {
      opacity: 0,
    }
  }

  startAnimation() {
    this.interval = setInterval(() => {
      if (this.state.opacity >= 1) {
        clearInterval(this.interval);
        return;
      }
      this.setState({
        opacity: this.state.opacity += 0.01
      })
    }, 1)
  }

  componentWillReceiveProps() {
    if(this.state.opacity >= 1) this.setState({ opacity: 0 });
    this.startAnimation();
  }

  render() {
    return (
      <img 
        src={ this.props.src }
        style={{ opacity: this.state.opacity }}
      />
    )
  }
}

export class Word extends React.Component{
  constructor() {
    super();

    this.state = {
      opacity: 0,
    }
  }

  startAnimation() {
    this.interval = setInterval(() => {
      if (this.state.opacity >= 1) {
        clearInterval(this.interval);
        return;
      }
      this.setState({
        opacity: this.state.opacity += 0.01
      })
    }, 1)
  }

  componentDidMount() {
    if(this.props.mode === 'game') {
      this.startAnimation();
    }
  }

  componentWillReceiveProps() {
    if(this.state.opacity >= 1) this.setState({ opacity: 0 });
    this.startAnimation();
  }
  render() {
    return (
      <p 
        style={{ opacity: this.state.opacity }}
        id={this.props.id}
        className="word" 
        dangerouslySetInnerHTML={ { __html: this.props.word } }
      ></p>
    )
  }
}