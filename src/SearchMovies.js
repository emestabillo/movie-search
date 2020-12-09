import React from "react";

function SearchMovies() {
  return (
    <form className="form">
      <label htmlFor="query" className="label">
        Movie name
      </label>
      <input
        type="text"
        name="query"
        className="input"
        placeholder="i.e. Jurassic Park"
      />
      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default SearchMovies;
