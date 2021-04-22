import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import Detail from "./Detail";
import "./Home.css";

class Home extends React.Component {
  
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const { data: { data: { movies }}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating&limits=30");
    this.setState({ movies, isLoading: false });
    // console.log(movies);
  }

  componentDidMount() {
    this.getMovies();
  }
  
  render() {
    const { isLoading, movies } = this.state;
    // console.log(movies);
    return (
      <section className="container"> {
          isLoading ? (
            <div className="loader">
              <span className="loader__text">Loading...</span>
            </div>
          ) : (
            <div className="movies">
              {movies.map( movie => (
                <Movie key = {movie.id}
                      id = { movie.id }
                      year = { movie.year }
                      title = { movie.title }
                      summary = { movie.summary.slice(0,140) }
                      poster = { movie.medium_cover_image }
                      genres = { movie.genres }
                      rating = { movie.rating } />
            ))}
          </div>
          )
      } </section>
    );
  };
}

export default Home;
