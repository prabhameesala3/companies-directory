<<<<<<< HEAD
import React from "react";
import CompanyCard from "./CompanyCard";

export default function CompanyList({ companies }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {companies.map((company) => (
        <CompanyCard key={company.id} company={company} />
      ))}
    </div>
  );
}
=======
import React from "react";
import CompanyCard from "./CompanyCard";

export default function CompanyList({ companies }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {companies.map((company) => (
        <CompanyCard key={company.id} company={company} />
      ))}
    </div>
  );
}
>>>>>>> 3397770c9566504f8862592cc036956adddc942c
