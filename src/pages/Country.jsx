import React, { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import Loader from "../component/Loader";
import CountryCard from "../component/CountryCard";
import SearchParam from "../component/SearchParam";

function Country() {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Show 10 countries per page

  const [search, setSearch] = useState();
  const [select, setSelect] = useState("all");
  // console.log(search,select);
  const findCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const selectRegion = (country) => {
    if (select === "all") return country;
    return country.region === select;
  };
  const searchCountry = countries.filter(
    (country) => findCountry(country) && selectRegion(country)
  );

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  if (isPending) {
    return <Loader />;
  }
// console.log("this is search country"+searchCountry);

  // Calculate pagination range
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleCountries = searchCountry.slice(startIndex, endIndex);
console.log("this is visiblecountry" + visibleCountries);

  return (
    <div className="container country-container text-white">
      <SearchParam
        search={search}
        setSearch={setSearch}
        select={select}
        setSelect={setSelect}
      />
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
          disabled={endIndex >= searchCountry.length} // Disable on last page
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Country;
