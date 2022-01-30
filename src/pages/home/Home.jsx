import React, { useState } from "react";
import './home.scss';

export default function Home(state) {

  return (
    <>
      <section className={state.state === 0 ? "section home show":"section home hide"}>
        <div className="center-container">
          <div className="center-block">
            <div className="upper-content">
              <div className="container contents">

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}