import React from 'react'

const MovieCard = ({movie:{imdbId,Year,Title,Poster, type}}) => {
  return (
    <div className='movie' key={imdbId}>
        <div>
            <p>{Year}</p>
        </div>

        <div>
            <img
            src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
            alt={Title}
            />
        </div>

        <div>
            <span>
                {type}
            </span>
            <h3>
                {Title}
            </h3>
        </div>

    </div>
  )
}

export default MovieCard