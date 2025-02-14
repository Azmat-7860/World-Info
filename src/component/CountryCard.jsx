import React from "react";
import { NavLink } from "react-router-dom";

const CountryCard = ({ country }) => {
//   console.log("this is form country card");
const{flags,name,population,capital,region} = country;
//   console.log(flags,name,population,capital);

  return (
    <li>
    <div className="countryCard text-start">
        <img className="w-100 card-image"  src={flags.svg} alt={flags.alt} />
        <h3 className='fw-semibold fst-italic text-decoration-underline'>{name.common.length > 10 ? name.common.slice(0,9).concat("...") : name.common}</h3>
        <p className='lh-1'><span className='text-white fw-medium '>Capital :</span> {capital[0]}</p>
        <p className='lh-1'><span className='text-white fw-medium '>Population :</span> {population}</p>
        <p className='lh-1'><span className='text-white fw-medium '>Region :</span> {region}</p>
       <NavLink to={`/World-Info/country/${name.common}`}> <button type="button">Read More </button> </NavLink>
      </div>
    </li>
  );
};

export default CountryCard;
