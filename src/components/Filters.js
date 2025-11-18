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

export default function Filters({
  search,
  setSearch,
  industry,
  setIndustry,
  location,
  setLocation,
  industries,
  locations
}) {
  return (
    <div className="bg-white p-4 rounded-xl shadow mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
      <input
        type="text"
        placeholder="Search company..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded-lg"
      />

      <select
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
        className="border p-2 rounded-lg"
      >
        <option value="">All Industries</option>
        {industries.map((ind) => (
          <option key={ind} value={ind}>
            {ind}
          </option>
        ))}
      </select>

      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border p-2 rounded-lg"
      >
        <option value="">All Locations</option>
        {locations.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>
    </div>
  );
}
