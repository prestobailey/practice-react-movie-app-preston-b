import React, { useState } from 'react';
import GenreSelector from './components/GenreSelector';
import FetchButton from './components/FetchButton';
import LoadingMessage from './components/LoadingMessage';
import ErrorMessage from './components/ErrorMessage';
import MovieList from './components/MovieList';
import movieData from './data/MovieData';
import './App.css';

function App() {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  function handleGenreChange(event) {
    setSelectedGenre(event.target.value);
  }

  function fetchMovies() {
    if (selectedGenre === '') {
      setError('Please select a genre.');
      setMovies([]);
      return;
    }

    setError('');
    setIsLoading(true);
    setMovies([]);

    // Simulate loading delay
    setTimeout(() => {
      const results = movieData[selectedGenre];
      setMovies(results);
      setIsLoading(false);
    }, 1000);
  }

  return (
    <div className="App">
      <h1>Movie App</h1>

      <GenreSelector value={selectedGenre} onChange={handleGenreChange} />

      <FetchButton onClick={fetchMovies} />

      {isLoading && <LoadingMessage />}
      {error && <ErrorMessage message={error} />}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}

export default App;
