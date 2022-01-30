import React, { useState } from "react";
import './works.scss';

export default function Works(state) {

  return (
    <>
      <section className={state.state === 3 ? "section show":"section hide"}>
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