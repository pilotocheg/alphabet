import { Link } from "react-router-dom";
import pic1 from '../../img/pic.jpg';
import pic2 from '../../img/pic-1.jpg';
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
          <div className="navigation">
            <Link to="/alphabet/learn">
              <p className="nav_link" id="link-1" href=""><span>В</span>ЧИТИСЯ</p>
            </Link>
            <Link to="/alphabet/game">
              <p className="nav_link" id="link-2" href=""><span>Г</span>РАТИ</p>
            </Link>
            <Link to="/alphabet/about">
              <p className="nav_link" id="link-3" href=""><span>П</span>РО <span>Н</span>АС</p>
            </Link>
          </div>
          <p className="title_primary">
            <span>І</span>нтерактивна <span>а</span>бетка <span>д</span>ля <span>д</span>ітей
          </p>
        </header>
        <div className="content">
          <div className="description">
            <div id="learn" className="learn">
              <h2><span>В</span>ЧИТИСЯ</h2>
              <p>Ця програма допоможе дітям вивчати абетку, 
              завдяки яскравим картинкам та звукам.
              Також має цікавий ігровий режим.</p>
              <Link to="/alphabet/learn">
                <button className="btn">Вчитися</button>
              </Link>
            </div>
            <div id="play" className="play">
              <h2><span>Г</span>РАТИ</h2>
              <p>Цей режим поєднує в собі навчання та гру. 
              Він допоможе дітям краще засвоїти літери,та зрозуміти 
              їх зв'язок із словами.</p>
              <Link to="/alphabet/game">
                <button className="btn">Грати</button>
              </Link>
            </div>
          </div>
          <div className="images">
            <img id="slider1" src={pic1} />
            <img id="slider2" src={pic2}/>
          </div>
          <button className="nav" id="nav_left">&lsaquo;</button>
          <button className="nav" id="nav_right">&rsaquo;</button>
        </div>
      </div>
    </div>
  )
}

