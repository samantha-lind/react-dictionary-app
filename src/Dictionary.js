import React, { useState } from "react";
import axios from "axios";
import "./style.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="wrapper">
      <div className="search-content">
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Search"
            onChange={updateKeyword}
          ></input>
        </form>
      </div>
      <div className="results">
        <Results results={results} />
      </div>
    </div>
  );
}
