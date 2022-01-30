import React, { useState } from "react";

import background from '../assets/img/background.png';
import Borders from "../components/borders/Borders";
import ScrollToTop from "../components/scrolltotop/ScrollToTop";
import Home from "./home/Home";
import About from "./about/About";
import Skills from './skills/Skills';
import Works from './works/Works';

export default function Index() {

  const [zoomIn, setZoomIt] = useState(false);
  const [menuT, setMenuT] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [secondary, setSecondary] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

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
                  scrollToTop();
                  }}><span className="cross-out">Inicio</span></p>
              </li>
              <li className={activeItem === 1 ? "nav-item active":"nav-item"}>
                <p onClick={()=>{
                  setMenuT(false);
                  setZoomIt(true);
                  setSecondary(true);
                  setActiveItem(1);
                  scrollToTop();
                }}><span className="cross-out">Acerca de mí</span></p>
              </li>
              <li className={activeItem === 2 ? "nav-item active":"nav-item"}>
                <p onClick={()=>{
                  setMenuT(false);
                  setZoomIt(true);
                  setSecondary(true);
                  setActiveItem(2);
                  scrollToTop();
                }}><span className="cross-out">Habilidades</span></p>
              </li>
              <li className={activeItem === 3 ? "nav-item active":"nav-item"}>
                <p onClick={()=>{
                  setMenuT(false);
                  setZoomIt(true);
                  setSecondary(true);
                  setActiveItem(3);
                  scrollToTop();
                }}><span className="cross-out">Trabajos</span></p>
              </li>
              <li className="credits">
                <p>© ALL RIGHTS RESERVED.</p>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* content */}
      <div className="content">
        {/* background */}
        <div className={ zoomIn ? "bg-img zoom-in" : "bg-img" } style={{backgroundImage: `url(${background})`}}></div>
        {/* home */}
        <Home state={activeItem}/>
        {/* about */}
        <About state={activeItem}/>
        {/* skills */}
        <Skills state={activeItem}/>
        {/* works */}
        <Works state={activeItem}/>
        {/* scroll-to-top */}
        <ScrollToTop />
      </div>
    </>
  );
}