import React from 'react'
import './style.css'
import favIcon from './favIcon.svg'

export default function (props) {

  function toggleFavorite(imdbID){
    document.getElementById(imdbID).style.backgroundColor = document.getElementById(imdbID).style.backgroundColor ? '' : 'yellow'
  }

  return (
    <div className='main'>
      {props.searchedData.Search ? (
        props.searchedData.Search.map(({ imdbID, Title, Type, Poster }) => <div key={imdbID} className="card">
          <div className='image-container'>
            <img src={Poster} alt={imdbID} />
            <div className="container">
              <div>
                <h4><b>{Title}</b></h4>
                <p>Type: {Type}</p>
              </div>
              <img id={imdbID} className='fav' src={favIcon} alt='favIcon' onClick={() => toggleFavorite(imdbID)}/>
            </div>
          </div>
        </div>)
      ) : (
          <div className="card">
            <div className="container">
              <h4><b>Sorry !!</b></h4>
              <p>No Movie found with this name.</p>
            </div>
          </div>
        )
      }
    </div>
  )
}