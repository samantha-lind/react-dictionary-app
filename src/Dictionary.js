import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState();

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  return (
    <div className="search-content">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search for a word"
          onChange={updateKeyword}
        ></input>
      </form>
    </div>
  );
}
