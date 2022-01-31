import React, { useState } from "react";
import './works.scss';
import SectionContentLayout from "../../layouts/sectioncontentlayout/SectionContentLayout";
import TitlesH2 from "../../components/titles/Titles";

export default function Works(state) {

  const [toggleSection, setToggleSection] = useState(false);

  return (
    <section className={state.state === 3 ? "section works show":"section works hide"}>
      <SectionContentLayout>
        <div className="row">
          <div className="col col-12">
            <TitlesH2 subtitle="Lo que he hecho" title="Trabajos" />
          </div>
        </div>
        <div className="divider-ot"></div>
        <div className="row">
          <div className="col-12 text-center">
            <span 
              className={!toggleSection ? "btn active fullwidth-liquid mx-1":"btn fullwidth-liquid mx-1"}
              onClick={() => setToggleSection(false)}
            >
              <span>Branding</span>
            </span>
            <span 
              className={toggleSection ? "btn active fullwidth-liquid mx-1":"btn fullwidth-liquid mx-1"}
              onClick={() => setToggleSection(true)}
            >
              <span>Web</span>
            </span>
          </div>
        </div>
        <div className="divider-ot"></div>
        {!toggleSection ? (
          <>
            Branding
          </>
        ):(
          <>
            Web
          </>
        )}
      </SectionContentLayout>
    </section>
  );
}