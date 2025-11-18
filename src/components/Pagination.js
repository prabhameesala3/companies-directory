import React from "react";

export default function Pagination({ page, setPage, totalPages }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 my-6">
      <button
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        className="px-3 py-1 border rounded"
      >
        Prev
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={`px-3 py-1 border rounded ${
            p === page ? "bg-gray-200 font-semibold" : ""
          }`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
        className="px-3 py-1 border rounded"
      >
        Next
      </button>
    </div>
  );
}
