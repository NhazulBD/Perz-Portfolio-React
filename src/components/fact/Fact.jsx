import React from "react";

export default function Fact(props) {
  return (
    <div className="col-6 col-md-4 col-lg-2 mt-1 mb-5 mb-lg-1 fact">
      <h4 className="heading text-center text-lg-left">
        {props.title}
      </h4>
      <div className="fade-text">
        <i className={props.icon}></i>
      </div>
    </div>
  );
}