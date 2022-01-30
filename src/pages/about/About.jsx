import React, { useState } from "react";
import './about.scss';
import SectionTitleLayout from "../../layouts/sectiontitlelayout/SectionTitleLayout";
import TitlesH2 from "../../components/titles/Titles";

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
      </SectionTitleLayout>
    </section>
  );
}