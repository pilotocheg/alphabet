import React, { PropTypes } from 'react';
import smilePic from '../../img/smile-pic.png';
import starPic from '../../img/star.png';

export default class StartMessageWindow extends React.Component {
  static propTypes = {
    counter: PropTypes.number,
    handleStart: PropTypes.func,
  }

  static defaultProps = {
    counter: 0,
    handleStart: () => {},
  }

  componentDidMount() {
    this.onInitAnimation(400);
  }

  onInitAnimation(duration) {
    const mWindow = this.messageWindow;
    mWindow.style.top = 0;
    const elHeight = mWindow.offsetHeight;
    const parElHeight = mWindow.parentElement.offsetHeight;
    const animLength = ((parElHeight - elHeight) / 2 / parElHeight).toFixed(2);
    const start = performance.now();

    const frame = (timestamp) => {
      const progress = timestamp - start;
      const diff = duration / (animLength * 10);
      const y = progress > 0 ? (progress / diff) * 10 : 0;
      mWindow.style.top = `${y.toFixed(0)}%`;
      if (progress <= duration) {
        requestAnimationFrame(frame);
      }
    };
    requestAnimationFrame(frame);
  }

  render() {
    const messageContent = this.props.counter === 3
      ? (
        <div>
          <h2 id="start-div-header">Перемога!</h2>
          <img id="smile-pic" src={smilePic} alt="" />
          <div id="stars-for-message">
            <img src={starPic} alt="" />
            <img src={starPic} alt="" />
            <img src={starPic} alt="" />
          </div>
          <button id="start-btn" onClick={this.props.handleStart}>Грати ще раз</button>
        </div>
      )
      : (
        <div>
          <img id="smile-pic" src={smilePic} alt="" />
          <button id="start-btn" onClick={this.props.handleStart}>Продовжити</button>
        </div>
      );

    return (
      <div id="start-div" ref={(e) => { this.messageWindow = e; }}>
        {
          !this.props.counter ?
            <div>
              <h2 id="start-div-header">Весела гра</h2>
              <p id="start-div-text">
                  Це ігровий режим. Правила дуже прості:
                  необхідно з трьох картинок обрати ту, яка
                  відповідає букві зліва. Щоб виграти, необхідно
                  знайти правильну картинку три рази.
              </p>
              <button id="start-btn" onClick={this.props.handleStart}>давай почнемо</button>
            </div>
          : messageContent
        }
      </div>
    );
  }
}
