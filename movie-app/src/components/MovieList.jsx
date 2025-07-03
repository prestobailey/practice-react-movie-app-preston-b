import React from 'react';

function MovieList(props) {
  return (
    <ul>
      {props.movies.map(function (movie, index) {
        return <li key={index}>{movie}</li>;
      })}
    </ul>
  );
}

export default MovieList;