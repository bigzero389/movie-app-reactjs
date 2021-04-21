import React from "react";
import PropTypes, { number } from "prop-types";

function Movie({id, year, title, summary, poster, rating}) {
  return <h4>{title}</h4>
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number
}

export default Movie;