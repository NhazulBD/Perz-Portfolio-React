import React, { useState } from "react";
import './about.scss';

export default function About(state) {

  return (
    <>
      <section className={state.state === 1 ? "section show":"section hide"}>
        <div className="center-container">
          <div className="center-block">
            <div className="upper-content">
              <div className="container contents">
                <div className="row">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}