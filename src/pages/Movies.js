import React from 'react'
import Movie from '../Components/Movie';
import MovieData from "../MovieData.json"

export default function Movies() {  

  return (
    <div>
      <div className="movies-container">
        {MovieData.map((item) => {
          return (
            <Movie
              id={item.id}
              title={item.title}
              poster_url={item.poster_url}
              rating={item.rating}
              flim_rating={item.flim_rating}
              country={item.country}
              distributor={item.distributor}
              genres={item.genres}
              release_date={item.release_date}
              runtime={item.runtime}
              summary={item.summary}
              director={item.director}
              actors={item.actors}
              awards={item.awards}
              price={item.price}
              youtube_trailer_url={item.youtube_trailer_url}
            />
          );
        })}
      </div>
    </div>
  )
}