// import React from "react";

// export default function Pagination({ page, setPage, totalPages }) {
//   const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

//   return (
//     <div className="flex items-center justify-center gap-2 my-6">
//       <button
//         onClick={() => setPage((p) => Math.max(1, p - 1))}
//         className="px-3 py-1 border rounded"
//       >
//         Prev
//       </button>

//       {pages.map((p) => (
//         <button
//           key={p}
//           onClick={() => setPage(p)}
//           className={`px-3 py-1 border rounded ${
//             p === page ? "bg-gray-200 font-semibold" : ""
//           }`}
//         >
//           {p}
//         </button>
//       ))}

//       <button
//         onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
//         className="px-3 py-1 border rounded"
//       >
//         Next
//       </button>
//     </div>
//   );
// }


import React from "react";

export default function Pagination({ page, setPage, totalPages }) {
  return (
    <div className="flex justify-center gap-4 mt-6">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
      >
        Previous
      </button>

      <span className="px-4 py-2 bg-gray-100 rounded">
        {page} / {totalPages}
      </span>

      <button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
        className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
