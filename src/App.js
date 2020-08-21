import React, { useState } from "react";
import "./styles.css";
import Dropdown from './Components/Dropdown/Dropdown'
import DisplayCards from './Components/DisplayCards/DisplayCards'
import NavBar from './Components/Navbar/Navbar'
import fetchMovieData from './fetchData'

export default function App() {

  const [searchText, setSearchText] = useState('')
  const [searchType, setSearchType] = useState('All')
  const [searchedData, setSearchedData] = useState({})

  function onSearch() {
    fetchMovieData(searchText, searchType, setSearchedData)
  }
  console.log('searchedData', searchedData)

  return (
    <div className="App">
      <NavBar />
      <input className='search-box' value={searchText} onChange={(val) => setSearchText(val.target.value)}></input>
      <Dropdown elements={['All', 'Movie', 'Series', 'Episode']} value={searchType} onClick={(val) => setSearchType(val)} />
      <button onClick={() => { onSearch() }} className="search-button">Search</button>
      <DisplayCards searchedData={searchedData}/>
    </div>
  );
}