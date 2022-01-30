import React, { useState } from "react";
import './skills.scss';
import SectionTitleLayout from "../../layouts/SectionTitleLayout/SectionTitleLayout";
import TitlesH2 from "../../components/titles/Titles";

export default function Skills(state) {
  return (
    <>
      <section className={state.state === 2 ? "section skills show":"section skills hide"}>
        <SectionTitleLayout>
          <div className="row">
            <div className="col col-12">
              <TitlesH2 subtitle="Lo que hago" title="Habilidades" />
            </div>
          </div>
        </SectionTitleLayout>
      </section>
    </>
  );
}