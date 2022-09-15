import React from "react";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <em>{props.meaning.partOfSpeech}</em>

      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <em>{definition.example}</em>
          </div>
        );
      })}
    </div>
  );
}
