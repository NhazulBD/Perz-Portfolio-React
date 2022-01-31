import React from "react";
import './skills.scss';
import SectionContentLayout from "../../layouts/sectioncontentlayout/SectionContentLayout";
import TitlesH2 from "../../components/titles/Titles";

const skillsDesc = [
  {heading:"Responsivo",text:"Mis diseños funcionarán en cualquier dispositivo, grande o pequeño."},
  {heading:"Intuitivo",text:"Fuerte preferencia por el UX/UI fácil de usar e intuitivo."},
  {heading:"Dinámico",text:"Las páginas web no tienen que ser estáticas, me encanta hacer que las páginas cobren vida."},
];

export default function Skills(state) {
  return (
    <section className={state.state === 2 ? "section skills show":"section skills hide"}>
      <SectionContentLayout>
        <div className="row">
          <div className="col col-12">
            <TitlesH2 subtitle="Lo que hago" title="Habilidades" />
          </div>
        </div>
        <div className="divider-ot"></div>
        <div className="row">
        {skillsDesc ? skillsDesc.map((skill, i) => {
            return (
              <div key={i} className="col-lg-4 col-sm-12 skills-block">
                <h4 className="heading">{skill.heading}</h4>
                <div className="fade-text">{skill.heading}</div>
                <p>{skill.text}</p>
              </div>
            )
          }):""}
        </div>
        <div className="divider-ot"></div>
      </SectionContentLayout>
    </section>
  );
}