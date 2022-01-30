import React, { useState } from "react";
import './about.scss';
import SectionTitleLayout from "../../layouts/sectiontitlelayout/SectionTitleLayout";
import TitlesH2 from "../../components/titles/Titles";
import Fact from "../../components/fact/Fact";

const facts = [
  {icon:"fa fa-gamepad",title:"Jugar video-juegos"},
  {icon:"fas fa-swimmer", title:"Me gusta nadar"},
  {icon:"mdi mdi-tea", title:"Adoro beber té"},
  {icon:"fas fa-hamburger", title:"Hamburbur!"},
  {icon:"mdi mdi-zodiac-sagittarius", title:"Soy Sagitario"},
  {icon:"fas fa-hat-wizard", title:"Me encanta la fantasía"},
];

export default function About(state) {
  return (
    <section className={state.state === 1 ? "section about show":"section about hide"}>
      <SectionTitleLayout>
        <div className="row">
          <div className="col col-12">
            <TitlesH2 subtitle="¿Quién es este sujeto?" title="Hey, soy Pedro" />
            <p>
              Me apasionan los efectos de la interfaz de usuario, las animaciones y la creación de experiencias de usuario intuitivas y dinámicas. <span className="link-underline"> "Hagamos algo especial"</span>.
            </p>
          </div>
        </div>
        <div className="divider-ot"></div>
        <div className="row mb-5">
          <div className="col-12 about-block">
            <h4 className="heading">Años en el negocio</h4>
            <div className="fade-text">5</div>
            <p>
              Desde que empecé mi carrera como diseñador independiente hace casi 5 años, he hecho trabajos para agencias, he consultado a empresas de nueva creación y he colaborado con personas de talento para crear productos digitales tanto para empresas como para consumidores. Estoy tranquilamente confiado, naturalmente soy curioso, y trabajo perpetuamente en mejorar mis habilidades. <span className="link-underline">"Un problema de diseño a la vez"</span>.
            </p>
          </div>
        </div>
        <h2 className="section-subheading mb-3">
          <span>Características al azar</span>
        </h2>
        <div className="row">
          {facts ? facts.map((fact, i) => {
            return (
              <Fact key={i} icon={fact.icon} title={fact.title}/>
            )
          }) : ""}
        </div>
      </SectionTitleLayout>
    </section>
  );
}