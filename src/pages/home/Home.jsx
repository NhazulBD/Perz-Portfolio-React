import React, { useState } from "react";

import background from '../../assets/img/background.png';

export default function Home() {

  const [zoomIn, setZoomIt] = useState(false);
  const [menuT, setMenuT] = useState(false);
  const [activeItem, setActiveItem] = useState(0)

  return (
    <>
      <div className="menu-trigger" onClick={()=>{if(menuT){setMenuT(false);}else{setMenuT(true);}}}>
        <button className={menuT ? "lines-button menu-toggle":"lines-button menu-toggle open"}>
          <span className="lines"></span>
        </button>
      </div>
      <div className={menuT ? "navbar-wrapper open":"navbar-wrapper"}>
        <div className="navbar-content">
          <nav className="navbar-nav">
            <ul>
              <li className={activeItem === 0 ? "nav-item active":"nav-item"}>
                <p onClick={()=>{
                  setMenuT(false);
                  setZoomIt(false);
                  setActiveItem(0);
                  }}><span className="cross-out">Inicio</span></p>
              </li>
              <li className={activeItem === 1 ? "nav-item active":"nav-item"}>
                <p onClick={()=>{
                  setMenuT(false);
                  setZoomIt(true);
                  setActiveItem(1);
                }}><span className="cross-out">Acerca de mí</span></p>
              </li>
              <li className={activeItem === 2 ? "nav-item active":"nav-item"}>
                <p onClick={()=>{
                  setMenuT(false);
                  setZoomIt(true);
                  setActiveItem(2);
                }}><span className="cross-out">Habilidades</span></p>
              </li>
              <li className={activeItem === 3 ? "nav-item active":"nav-item"}>
                <p onClick={()=>{
                  setMenuT(false);
                  setZoomIt(true);
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
      <div className={ zoomIn ? "bg-img zoom-in" : "bg-img" } style={{backgroundImage: `url(${background})`}}></div>
    </>
  );
}