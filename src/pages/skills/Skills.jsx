import React, { useState } from "react";
import './skills.scss';
import TitlesH2 from "../../components/titles/Titles";

export default function Skills(state) {
  return (
    <>
      <section className={state.state === 2 ? "section skills show":"section skills hide"}>
        <div className="center-container">
          <div className="center-block">
            <div className="lower-content">
              <div className="container contents">
                <div className="row">
                  <div className="col col-12">
                    <TitlesH2 subtitle="Lo que hago" title="Habilidades" />
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