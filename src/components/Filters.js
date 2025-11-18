// import React from "react";

// export default function Filters({
//   search,
//   setSearch,
//   industry,
//   setIndustry,
//   location,
//   setLocation,
//   industries,
//   locations,
// }) {
//   return (
//     <div className="bg-white p-4 rounded-xl shadow mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">

//       <input
//         type="text"
//         placeholder="Search company…"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="border p-2 rounded-lg"
//       />

//       <select
//         value={industry}
//         onChange={(e) => setIndustry(e.target.value)}
//         className="border p-2 rounded-lg"
//       >
//         <option value="">All Industries</option>
//         {industries.map((ind) => (
//           <option key={ind} value={ind}>
//             {ind}
//           </option>
//         ))}
//       </select>

//       <select
//         value={location}
//         onChange={(e) => setLocation(e.target.value)}
//         className="border p-2 rounded-lg"
//       >
//         <option value="">All Locations</option>
//         {locations.map((loc) => (
//           <option key={loc} value={loc}>
//             {loc}
//           </option>
//         ))}
//       </select>

//     </div>
//   );
// }

import React from "react";

export default function Filters({ filters, setFilters, uniqueLocations, uniqueIndustries }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex flex-col md:flex-row items-center justify-between gap-4 mb-8">

      <input
        type="text"
        value={filters.search}
        placeholder="🔍 Search company..."
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, search: e.target.value }))
        }
        className="border p-2 rounded-lg w-full md:w-1/3 shadow-sm"
      />

      <div className="flex gap-3 w-full md:w-auto">

        <select
          value={filters.location}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, location: e.target.value }))
          }
          className="border p-2 rounded-lg shadow-sm"
        >
          <option value="">🌍 All Locations</option>
          {uniqueLocations.map((loc) => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>

        <select
          value={filters.industry}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, industry: e.target.value }))
          }
          className="border p-2 rounded-lg shadow-sm"
        >
          <option value="">🏭 All Industries</option>
          {uniqueIndustries.map((ind) => (
            <option key={ind} value={ind}>{ind}</option>
          ))}
        </select>

        <select
          value={filters.sort}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, sort: e.target.value }))
          }
          className="border p-2 rounded-lg shadow-sm"
        >
          <option value="">↕ Sort</option>
          <option value="name_asc">A → Z</option>
          <option value="name_desc">Z → A</option>
        </select>
      </div>
    </div>
  );
}
