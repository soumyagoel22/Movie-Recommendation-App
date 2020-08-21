const fetchMovieData = (searchText, searchType, setSearchedData) => {
  searchType = searchType === 'All' ? '' : searchType
  let url = `https://www.omdbapi.com/?apikey=222ab4b0&type=${searchType}&s=${searchText}`
  fetch(url)
    .then(res => res.json())
    .then(data => {
      setSearchedData(data)
    })
}

export default fetchMovieData