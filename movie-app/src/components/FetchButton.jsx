import React from 'react';

function FetchButton(props) {
  return (
    <div>
      <button onClick={props.onClick}>Fetch Movies</button>
    </div>
  );
}

export default FetchButton;