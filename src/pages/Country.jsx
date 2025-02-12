import React, { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import Loader from "../component/Loader";
import CountryCard from "../component/CountryCard";

function Country() {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountry] = useState([]);
  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountry(res.data);
    });
  }, []);
  if (isPending) {
    return <Loader />;
  }
  console.log(countries);
  return (
    <div className=" border-1">
      <div className="container country-container text-white">
        <ul>
          {countries.map((currCountry, index) => {
            return <CountryCard country={currCountry} key={index} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Country;
