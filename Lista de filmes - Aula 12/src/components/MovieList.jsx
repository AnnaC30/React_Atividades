import React from 'react';
import { useParams } from 'react-router-dom';
import movies from './movies';

const MovieList = () => {
  const { genre } = useParams();
  const filteredMovies = movies.filter(movie => movie.genre === genre);

  return (
    <div>
      <h2>Filmes de {genre}</h2>
      <ul>
        {filteredMovies.length > 0 ? (
          filteredMovies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))
        ) : (
          <li>Nenhum filme encontrado.</li>
        )}
      </ul>
    </div>
  );
};

export default MovieList;