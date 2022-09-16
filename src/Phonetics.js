import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

export default function Phonetics(props) {
  let text = props.phonetics.text;
  let audio = props.phonetics.audio;
  const audioFile = <FontAwesomeIcon icon={faCirclePlay} />;

  return (
    <span className="phonetics">
      {text}
      <a href={audio} target="_blank" className="audio-file">
        {audioFile}
      </a>
    </span>
  );
}
