import React, { useState } from "react";

import background from '../../assets/img/background.png';
import Borders from "../../components/borders/Borders";

export default function Home() {

  const [zoomIn, setZoomIt] = useState(false);
  const [menuT, setMenuT] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [secondary, setSecondary] = useState(false);

  return (
    <>
      {/* borders */}
      <Borders state={secondary}/>
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