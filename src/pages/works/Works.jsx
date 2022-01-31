import React, { useState } from "react";
import './works.scss';
import SectionContentLayout from "../../layouts/sectioncontentlayout/SectionContentLayout";
import TitlesH2 from "../../components/titles/Titles";

export default function Works(state) {
  return (
    <section className={state.state === 3 ? "section works show":"section works hide"}>
      <SectionContentLayout>
        <div className="row">
          <div className="col col-12">
            <TitlesH2 subtitle="Lo que he hecho" title="Trabajos" />
          </div>
        </div>
      </SectionContentLayout>
    </section>
  );
}