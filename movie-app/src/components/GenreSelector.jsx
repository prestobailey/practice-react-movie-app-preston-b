import React from 'react';

function GenreSelector(props) {
  return (
    <div>
      <label>Choose a Genre:</label><br />
      <select value={props.value} onChange={props.onChange}>
        <option value="">Select Genre</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
      </select>
    </div>
  );
}

export default GenreSelector;