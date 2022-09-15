import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meanings);
  return (
    <div className="meaning">
      <em>{props.meaning.partOfSpeech}</em>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition: </strong>
              {definition.definition}
            </p>
            <p>
              <em>{definition.example}</em>
            </p>
            <Synonyms synonyms={props.meaning.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
