import React from 'react'
import country from "../api/country.json"

function About() {

  return <>
  <div className="container about-container text-center">
    <h2>Here are intresting facts <br />we're proud of</h2>
    <div className="container about-cards ">
  {
    country.map((e) => (
      <div key={e.id} className="mycard text-start">
        <h3 className='fw-semibold fst-italic text-decoration-underline'>{e.name}</h3>
        <p className='lh-1'><span className='text-white fw-medium '>Capital :</span> {e.capital}</p>
        <p className='lh-1'><span className='text-white fw-medium '>Population :</span> {e.population} Million</p>
        <p className='lh-1'><span className='text-white fw-medium '>Interesting Fact :</span> {e.fact}</p>
      </div>
    ))
  }
</div>

  </div>
  </>
}

export default About