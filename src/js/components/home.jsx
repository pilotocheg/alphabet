import { Link } from "react-router-dom";
import pic from '../../img/pic.jpg';
import pic1 from '../../img/pic-1.jpg';
import React from 'react';

export default function Home() {
  return(
    <div className="container">
      <div className="s_width">
        <header>
          <h1>
            ВЕСЕ<span className="stroke">Л</span><br/>
            <span id="big-letter">A</span>
            <span id="second-word">
              <span className="stroke">Б</span>ЕТКА
            </span>
          </h1>
          <p className="title_primary">Інтерактивна абетка для дітей</p>
          <div className="navigation">
            <a className="nav_link" id="link-1" href=""><span>В</span>ЧИТИСЯ</a>
            <a className="nav_link" id="link-2" href=""><span>Г</span>РАТИ</a>
            <a className="nav_link" id="link-3" href=""><span>П</span>РО <span>Н</span>АС</a>
          </div>
        </header>
        <div className="content">
          <div className="description">
            <div id="learn" className="learn">
              <h2><span>В</span>ЧИТИСЯ</h2>
              <p>Ця програма допоможе дітям вивчати абетку, завдяки яскравим картинкам та звукам. Також має цікавий <span>ігровий</span> режим</p>
              {/* <Link to="/learn"> */}
                <button>ВЧИТИСЯ</button>
              {/* </Link> */}
            </div>
            <div id="play" className="play">
              <h2><span>Г</span>РАТИ</h2>
              <p>Цей режим поєднує в собі навчання та гру. Він допоможе дітям краще засвоїти літери,та зрозуміти їх зв'язок із словами</p>
              {/* <Link to="/game"> */}
                <button>ВЧИТИСЯ</button>
              {/* </Link> */}
            </div>
          </div>
          <div className="images">
            <img id="slider1" src={pic} />
            <img id="slider2" src={pic1}/>
          </div>
          <button className="nav" id="nav_left">&lsaquo;</button>
          <button className="nav" id="nav_right">&rsaquo;</button>
        </div>
      </div>
    </div>
  )
}

