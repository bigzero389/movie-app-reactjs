import React from "react";
import PropTypes, { number } from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({id, year, title, summary, poster, genres, rating}) {
  return (
    <Link to={{
      pathname: `/movie/${id}`,
      state: {
        year,
        title,
        summary,
        poster,
        genres,
        rating
      }
    }}>
      <div className="movie">
        <img className="movie__poster" alt={title} title={title} src={poster} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h3 className="movie__year">{year} : {rating}</h3>
          <ul className="movie__genres">{genres.map( (genre,index) => <li key={index} className="genres_genre">{genre}</li> )}</ul>
          <p className="movie__summary">{summary}</p>
        </div>
      </div>
    </Link>
    
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;