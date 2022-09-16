import React from "react";

export default function Meaning(props) {
  return (
    <div className="meaning-wrapper">
      <div className="meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index} className="word-meaning">
              <span className="definition">{definition.definition}</span>
              <br />
              <span className="example">{definition.example}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
