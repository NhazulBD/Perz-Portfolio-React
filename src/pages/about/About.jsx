import React, { useState } from "react";
import './about.scss';
import TitlesH2 from "../../components/titles/Titles";

export default function About(state) {
  return (
    <>
      <section className={state.state === 1 ? "section about show":"section about hide"}>
        <div className="center-container">
          <div className="center-block">
            <div className="lower-content">
              <div className="container contents">
                <div className="row">
                  <div className="col col-12">
                    <TitlesH2 subtitle="¿Quién es este sujeto?" title="Hey, soy Pedro" />
                    <p>
                      Me apasionan los efectos de la interfaz de usuario, las animaciones y la creación de experiencias de usuario intuitivas y dinámicas. <span className="link-underline"> "Hagamos algo especial"</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}