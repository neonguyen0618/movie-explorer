import React from "react";

export default function Pagination({ page, totalPages, setPage, hasPrev, hasNext }) 
{
  return (
    <nav className="pagination" aria-label="Pagination">
      <button
        className="btn"
        type="button"
        aria-label="Previous page"
        onClick={() => setPage(page - 1)}
        disabled={!hasPrev}
      >
        Previous
      </button>

      <span id="pageLabel" className="page-label">
        Page {page} of {totalPages}
      </span>

      <button
        className="btn"
        type="button"
        aria-label="Next page"
        onClick={() => setPage(page + 1)}
        disabled={!hasNext}
      >
        Next
      </button>
    </nav>
  );
}
