import React from "react";
import MovieCard from "./MovieCard";

export default function MovieGrid({ movies }) {
  if (!movies || movies.length === 0) {
    return <p className="status">No movies found.</p>;
  }

  return (
    <section id="grid" className="grid" aria-live="polite" aria-busy="false">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </section>
  );
}
