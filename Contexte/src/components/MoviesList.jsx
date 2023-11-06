import React from "react";
import MovieContext from "../contexts/MovieContext";

function MoviesList() {
  const { movies } = React.useContext(MovieContext);

  return (
    <>
      <h1>MoviesList</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.movie_id}>
            {movie.title} ({movie.release_year})
          </li>
        ))}
      </ul>
    </>
  );
}

export default MoviesList;
