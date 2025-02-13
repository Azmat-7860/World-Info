import React, { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import Loader from "../component/Loader";
import CountryCard from "../component/CountryCard";

function Country() {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Show 10 countries per page

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  if (isPending) {
    return <Loader />;
  }

  // Calculate pagination range
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleCountries = countries.slice(startIndex, endIndex);

  return (
    <div className="container country-container text-white">
      <ul className="p-0">
        {visibleCountries.map((currCountry, index) => (
          <CountryCard country={currCountry} key={index} />
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="pagination-controls text-center mt-3">
        <button
          className="btn btn-danger mx-2"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1} // Disable on first page
        >
          Previous
        </button>

        <span className="mx-2">Page {currentPage}</span>

        <button
          className="btn btn-primary mx-2"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={endIndex >= countries.length} // Disable on last page
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Country;
