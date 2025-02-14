import React from 'react'

const SearchParam = ({search,setSearch,select,setSelect}) => {
    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value)
    }
    const handleSelect = (e) => {
        e.preventDefault();
        setSelect(e.target.value)
    }
   return <section className='searchParam my-4 w-100 h-25 d-flex justify-content-around  '>

    <div className='searchInput'>
        <input type="text" value={search} placeholder='Enter Country Name 'onChange={handleSearch}/>
    </div>
   
    <div className='selectSearch'>
        <select className='ps-3' value={select} onChange={handleSelect} >
            <option value="all" > All</option>
            <option value="Africa" >Africa </option>
            <option value="Asia" >Asia </option>
            <option value="Europe" >Europe </option>
            <option value="Americas" > Americas</option>
            <option value="Oceania" > Oceania</option>
        </select>
    </div>

  </section>
}

export default SearchParam