import React from "react";

export default function Header({ query, setQuery, sort, setSort }) {
  return (
    <header className="hero" role="banner" aria-labelledby="app-title">
      <h1 id="app-title" className="hero__title">
        Movie Explorer
      </h1>
      <div className="controls" role="search">
        <label className="sr-only" htmlFor="search">
          Search for a movie
        </label>
        <input
          id="search"
          className="input"
          type="search"
          placeholder="Search for a movie..."
          autoComplete="off"
          aria-label="Search for a movie"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <label className="sr-only" htmlFor="sort">
          Sort By
        </label>
        <select
          id="sort"
          className="select"
          aria-label="Sort movies"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="none">Sort By</option>
          <option value="release.asc">Release Date (Asc)</option>
          <option value="release.desc">Release Date (Desc)</option>
          <option value="rating.asc">Rating (Asc)</option>
          <option value="rating.desc">Rating (Desc)</option>
        </select>
      </div>
    </header>
  );
}
