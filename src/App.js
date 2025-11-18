// import React, { useEffect, useState, useMemo } from "react";
// import { fetchCompanies } from "./api";
// import Filters from "./components/Filters";
// import CompanyList from "./components/CompanyList";
// import Pagination from "./components/Pagination";

// function App() {
//   const [companies, setCompanies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [filters, setFilters] = useState({
//     search: "",
//     location: "",
//     industry: "",
//     sort: "",
//   });

//   const [page, setPage] = useState(1);
//   const perPage = 6;

//   useEffect(() => {
//     fetchCompanies()
//       .then((data) => {
//         setCompanies(data);
//         setLoading(false);
//       })
//       .catch(() => {
//         setError("Failed to load companies");
//         setLoading(false);
//       });
//   }, []);

//   const uniqueLocations = useMemo(
//     () => [...new Set(companies.map((c) => c.location))].filter(Boolean),
//     [companies]
//   );

//   const uniqueIndustries = useMemo(
//     () => [...new Set(companies.map((c) => c.industry))].filter(Boolean),
//     [companies]
//   );

//   const filtered = useMemo(() => {
//     let result = [...companies];

//     if (filters.search) {
//       const s = filters.search.toLowerCase();
//       result = result.filter((c) => c.name.toLowerCase().includes(s));
//     }

//     if (filters.location) {
//       result = result.filter((c) => c.location === filters.location);
//     }

//     if (filters.industry) {
//       result = result.filter((c) => c.industry === filters.industry);
//     }

//     if (filters.sort === "name_asc")
//       result.sort((a, b) => a.name.localeCompare(b.name));

//     if (filters.sort === "name_desc")
//       result.sort((a, b) => b.name.localeCompare(a.name));

//     return result;
//   }, [companies, filters]);

//   const totalPages = Math.ceil(filtered.length / perPage);

//   const paginated = useMemo(() => {
//     const start = (page - 1) * perPage;
//     return filtered.slice(start, start + perPage);
//   }, [filtered, page]);

//   return (
//     <div className="container mx-auto p-4">
//     <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl shadow-lg mb-8">
//   <h1 className="text-3xl font-bold">Companies Directory</h1>
//   <p className="text-sm opacity-90 mt-1">Developed by <span className="font-semibold">Prabhakar M</span></p>
// </div>



// <Filters
//   search={filters.search}
//   setSearch={(v) => setFilters({ ...filters, search: v })}
//   industry={filters.industry}
//   setIndustry={(v) => setFilters({ ...filters, industry: v })}
//   location={filters.location}
//   setLocation={(v) => setFilters({ ...filters, location: v })}
//   industries={uniqueIndustries}
//   locations={uniqueLocations}
// />



//       {loading && <p className="text-center">Loading...</p>}

//       {error && <p className="text-center text-red-600">{error}</p>}

//       {!loading && !error && filtered.length === 0 && (
//         <p className="text-center">No companies found.</p>
//       )}

//       {!loading && !error && filtered.length > 0 && (
//         <>
//           <CompanyList companies={paginated} />
//           <Pagination page={page} setPage={setPage} totalPages={totalPages} />
//         </>
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState, useMemo } from "react";
import { fetchCompanies } from "./api";
import Filters from "./components/Filters";
import CompanyList from "./components/CompanyList";
import Pagination from "./components/Pagination";

function App() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("");
  const [location, setLocation] = useState("");

  const [page, setPage] = useState(1);
  const perPage = 6;

  useEffect(() => {
    fetchCompanies()
      .then((data) => {
        setCompanies(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load companies");
        setLoading(false);
      });
  }, []);

  const industries = useMemo(
    () => [...new Set(companies.map((c) => c.industry))],
    [companies]
  );

  const locations = useMemo(
    () => [...new Set(companies.map((c) => c.location))],
    [companies]
  );

  const filtered = useMemo(() => {
    let result = [...companies];

    if (search) {
      const s = search.toLowerCase();
      result = result.filter((c) => c.name.toLowerCase().includes(s));
    }

    if (location) {
      result = result.filter((c) => c.location === location);
    }

    if (industry) {
      result = result.filter((c) => c.industry === industry);
    }

    return result;
  }, [companies, search, industry, location]);

  const totalPages = Math.ceil(filtered.length / perPage);

  const paginated = useMemo(() => {
    const start = (page - 1) * perPage;
    return filtered.slice(start, start + perPage);
  }, [filtered, page]);

  return (
    <div className="container mx-auto p-4">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl shadow-lg mb-8">
        <h1 className="text-3xl font-bold">Companies Directory</h1>
        <p className="text-sm opacity-90 mt-1">
          Developed by <span className="font-semibold">Prabhakar M</span>
        </p>
      </div>

      <Filters
        search={search}
        setSearch={setSearch}
        industry={industry}
        setIndustry={setIndustry}
        location={location}
        setLocation={setLocation}
        industries={industries}
        locations={locations}
      />

      {loading && <p className="text-center">Loading...</p>}

      {error && <p className="text-center text-red-600">{error}</p>}

      {!loading && !error && filtered.length === 0 && (
        <p className="text-center">No companies found.</p>
      )}

      {!loading && !error && filtered.length > 0 && (
        <>
          <CompanyList companies={paginated} />
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </>
      )}
    </div>
  );
}

export default App;
