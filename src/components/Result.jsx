import React from 'react';

function Result({ result, openPopup }) {
  return (
    <section className="result" onClick={() => openPopup(result.imdbID)}>
        <img src={result.Poster} alt={result.Title} />
        <h3>{result.Title}</h3>

    </section>
  )
}

export default Result
