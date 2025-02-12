import React from "react";

const CountryCard = ({ country }) => {
//   console.log("this is form country card");
const{flags,name,population,capital,region} = country;
//   console.log(flags,name,population,capital);

  return (
    <li>
    <div className="countryCard text-start border-1 border-black">
        <img className="w-100 card-image"  src={flags.svg} alt={flags.alt} />
        <h3 className='fw-semibold fst-italic text-decoration-underline'>{name.common}</h3>
        <p className='lh-1'><span className='text-white fw-medium '>Capital :</span> {capital[0]}</p>
        <p className='lh-1'><span className='text-white fw-medium '>Population :</span> {population}</p>
        <p className='lh-1'><span className='text-white fw-medium '>Region :</span> {region}</p>
        <button type="button">Read More</button>
      </div>
    </li>
  );
};

export default CountryCard;
