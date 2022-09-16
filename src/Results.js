import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./style.css";

export default function Results(props) {
  if (props.results) {
    console.log(props.results);
    return (
      <div className="results-wrapper">
        <div>
          <section className="headline">
            <h2>{props.results.word}</h2>
            {props.results.phonetics.map(function (phonetics, index) {
              return (
                <div key={index}>
                  <Phonetics phonetics={phonetics} />
                </div>
              );
            })}
          </section>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
