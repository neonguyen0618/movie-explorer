import React from "react";

export default function MovieCard({ movie }) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <article className="card">
      <img src={posterUrl} alt={movie.title} className="card__poster" />
      <h2 className="card__title">{movie.title}</h2>
      <p className="card__meta">📅 {movie.release_date || "N/A"}</p>
      <p className="card__meta">
        ⭐ {typeof movie.vote_average === "number" ? movie.vote_average.toFixed(1) : "N/A"}
      </p>
    </article>
  );
}
