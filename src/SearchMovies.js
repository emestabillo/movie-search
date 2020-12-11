import React from "react";

function SearchMovies() {
  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("submitting");

    const query = "Jurassic Park";

    const url = `https://api.themoviedb.org/3/movie/550?api_key=1e40b926a05f5f0a055187631b4f231e&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="form" onSubmit={searchMovies}>
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
