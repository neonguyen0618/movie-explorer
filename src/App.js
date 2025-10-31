import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import MovieGrid from "./components/MovieGrid";
import Pagination from "./components/Pagination";
import "./styles.css";

const API_KEY = "fe7702cbc3c1ad94ce25b724744f16e2"; 
const BASE_URL = "https://api.themoviedb.org/3";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("none");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => 
  {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, query, sort]);

  const fetchMovies = async () => 
  {
    setLoading(true);
    setError("");
    try 
    {
      let url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&page=${page}`;

      if (query) 
      {
        url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`;
      }

      if (sort.includes("release")) 
      {
        url += `&sort_by=release_date.${sort.endsWith("asc") ? "asc" : "desc"}`;
      }

      if (sort.includes("rating")) 
      {
        url += `&sort_by=vote_average.${ sort.endsWith("asc") ? "asc" : "desc"}`;
      }

      const res = await fetch(url);
      const data = await res.json();

      if (data.success === false) 
      {
        throw new Error(data.status_message || "TMDB error");
      }

      setMovies(data.results || []);
      setTotalPages(data.total_pages || 1); // store total pages
    } 
    catch (err) 
    {
      console.error(err);
      setError(err.message || "Something went wrong.");
      setMovies([]);
    } 
    finally 
    {
      setLoading(false);
    }
  };

  return (
    <>
      <Header
        query={query}
        setQuery={(val) => {
          setPage(1);
          setQuery(val);
        }}
        sort={sort}
        setSort={(val) => {
          setPage(1);
          setSort(val);
        }}
      />
      <main className="container">
        {error ? (
          <p className="status">{error}</p>
        ) : loading ? (
          <p className="status">Loading...</p>
        ) : (
          <MovieGrid movies={movies} />
        )}
        <Pagination
          page={page}
          totalPages={totalPages}
          setPage={setPage}
          hasPrev={page > 1}
          hasNext={movies.length >= 20}
        />
      </main>
    </>
  );
}
