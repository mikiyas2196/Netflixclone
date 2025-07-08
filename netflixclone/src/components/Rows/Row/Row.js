import React, { useState, useEffect } from 'react';
import axios from '../../../utils/axios';
import './Row.css';

const baseImageUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchURL);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching data in Row.js:", error);
      }
    };

    fetchData();
  }, [fetchURL]);

  return (
    <div className="row">
      <h2 className="row_title">{title}</h2>

      <div className="row_posters">
        {movies.map((movie) =>
          (isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path) ? (
            <img
              key={movie.id}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${baseImageUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
            />
          ) : null
        )}
      </div>
    </div>
  );
}

export default Row;
