import React, { useState } from "react";

export default function Home(state) {

  return (
    <>
      <section className={state.state === 0 ? "section home show":"section home hide"}>
        
      </section>
    </>
  );
}