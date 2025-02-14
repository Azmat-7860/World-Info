import React, { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryDetails } from "../api/postApi";
import Loader from "./Loader";
import { FaArrowRight } from "react-icons/fa";

const CountryDetails = () => {
  const { id } = useParams();

  const [country, setCountry] = useState([]);

  useEffect(() => {
    const response = async () => {
      const apiData = await getCountryDetails(id);
      setCountry(apiData.data[0]);
    };
    response();
  }, []);
 
  return (
    <div className="country-details h-100">
      {/* Left side - Flag */}
      <div className="country-flag">
        <img src={country.flags?.png} alt={country.name?.common} />
      </div>

      {/* Right side - Details */}
      <div className="country-info">
        <h2>{country.name?.common}</h2>
        <p>
          <strong>Population :</strong> {country.population}
        </p>
        <p>
          <strong>Region :</strong> {country.region}
        </p>
        <p>
          <strong>Subregion :</strong> {country.subregion}
        </p>
        <p>
          <strong>Capital :</strong> {country.capital?.[0]}
        </p>
        <p>
          <strong>Top-Level Domain :</strong> {country.tld?.join(", ")}
        </p>
        <p>
          <strong>Currencies :</strong>{" "}
          {Object.values(country.currencies || {})
            .map((c) => c.name)
            .join(", ")}
        </p>
        <p>
          <strong>Languages :</strong>{" "}
          {Object.values(country.languages || {}).join(", ")}
        </p>
        <p>
          <strong>Borders :</strong>{" "}
          {country.borders
            ? country.borders.join(", ")
            : "No bordering countries"}
        </p>
        <NavLink to="/country"> <button type="button">Go Back </button> </NavLink>
      </div>
    </div>
  );
};

export default CountryDetails;
