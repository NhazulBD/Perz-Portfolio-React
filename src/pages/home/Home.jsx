import React, { useState } from "react";

import background from '../../assets/img/background.png';

export default function Home() {

  const [zoomIn, setZoomIt] = useState(false);
  const [menuT, setMenuT] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [secondary, setSecondary] = useState(false);

  return (
    <>
      {/* borders */}
      <div className={secondary ? "the-borders border-top secondary":"the-borders border-top"}></div>
      <div className={secondary ? "the-borders border-right secondary":"the-borders border-right"}></div>
      <div className={secondary ? "the-borders border-bottom secondary":"the-borders border-bottom"}></div>
      <div className={secondary ? "the-borders border-left secondary":"the-borders border-left"}></div>
      {/* waves */}
      <div style={{height:"665px",width:"1319px", position:"relative"}}>
        <svg className={secondary ? "border-wave secondary":"border-wave"} xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wave-gradient" gradientTransform="rotate(90)">
              <stop offset="5%" stopColor="#ffffff" />
              <stop offset="35%" stopColor="#ffffff" />
            </linearGradient>
            <path id="a" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z" fill="#ffffff" />
          </defs>
          <g className="wave-paths">
            <use href="#a" x="0" />
            <use href="#a" x="50" y="3" />
            <use href="#a" x="100" y="5" />
            <use href="#a" x="150" y="7" />
            <use href="#a" x="200" y="7" />
          </g>
        </svg>
      </div>
      {/* <canvas className={secondary ? "border-wave secondary":"border-wave"}></canvas> */}
      {/* logo */}
      <div className={secondary ? "logo secondary":"logo"}></div>
      {/* button menu */}
      <div className={secondary ? "menu-trigger secondary":"menu-trigger"} onClick={()=>{if(menuT){setMenuT(false);}else{setMenuT(true);}}}>
        <button className={menuT ? "lines-button menu-toggle":"lines-button menu-toggle open"}>
          <span className="lines"></span>
        </button>
      </div>
      {/* navbar menu */}
      <div className={menuT ? "navbar-wrapper open":"navbar-wrapper"}>
        <div className="navbar-content">
          <nav className="navbar-nav">
            <ul>
              <li className={activeItem === 0 ? "nav-item active":"nav-item"}>
                <p onClick={()=>{
                  setMenuT(false);
                  setZoomIt(false);
                  setSecondary(false);
                  setActiveItem(0);
                  }}><span className="cross-out">Inicio</span></p>
              </li>
              <li className={activeItem === 1 ? "nav-item active":"nav-item"}>
                <p onClick={()=>{
                  setMenuT(false);
                  setZoomIt(true);
                  setSecondary(true);
                  setActiveItem(1);
                }}><span className="cross-out">Acerca de mí</span></p>
              </li>
              <li className={activeItem === 2 ? "nav-item active":"nav-item"}>
                <p onClick={()=>{
                  setMenuT(false);
                  setZoomIt(true);
                  setSecondary(true);
                  setActiveItem(2);
                }}><span className="cross-out">Habilidades</span></p>
              </li>
              <li className={activeItem === 3 ? "nav-item active":"nav-item"}>
                <p onClick={()=>{
                  setMenuT(false);
                  setZoomIt(true);
                  setSecondary(true);
                  setActiveItem(3);
                }}><span className="cross-out">Trabajos</span></p>
              </li>
              <li className="credits">
                <p>© ALL RIGHTS RESERVED.</p>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* background */}
      <div className={ zoomIn ? "bg-img zoom-in" : "bg-img" } style={{backgroundImage: `url(${background})`}}></div>
    </>
  );
}