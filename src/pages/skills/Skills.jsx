import React, { useState } from "react";
import './skills.scss';

export default function Skills(state) {
  return (
    <>
      <section className={state.state === 2 ? "section show":"section hide"}>
        <div className="center-container">
          <div className="center-block">
            <div className="lower-content">
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