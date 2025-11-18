import React from "react";

export default function CompanyCard({ company }) {
  return (
  <div className="border rounded-xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 bg-white">
    <h3 className="text-xl font-semibold text-gray-800">{company.name}</h3>

    <p className="text-sm text-gray-500 mt-1">
      {company.industry} • {company.size}
    </p>

    <div className="mt-3 space-y-1">
      <p className="text-gray-700 text-sm">
        📍 {company.location}
      </p>
    </div>

    <a
      href={company.website}
      target="_blank"
      rel="noreferrer"
      className="mt-4 inline-block text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium shadow"
    >
      Visit Website
    </a>
  </div>
);

}
