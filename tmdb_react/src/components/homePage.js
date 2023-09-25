import React, { useEffect, useState } from 'react';
import { TMDB_API_KEY } from '../config/config';
import './homePage.css';

function HomePage() {
  // State to store popular movies
  const [popularMovies, setPopularMovies] = useState([]);
  // State to store searched movie
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search
  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&language=en-US&page=1&query=${searchQuery}`
      );
      const data = await response.json();
      // Update the state with the search results
      setPopularMovies(data.results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  // Function to handle Enter key press
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    // Function to fetch popular movies
    const fetchPopularMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
        );
        const data = await response.json();
        setPopularMovies(data.results);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };

    // Call the fetchPopularMovies function when the component mounts
    fetchPopularMovies();
  }, []);

  return (
    <div>
      <div className="navbar">
        <a href="#popular">Popular</a>
        <a href="#genre">Genre</a>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search movies"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyPress} // Add event listener for Enter key
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      <h1>Popular Movies</h1>
      <div className="movie-list">
        {popularMovies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <h2>{movie.title}</h2>
            <p>Release Date: {movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;