import React, { useState, useEffect } from 'react';
import axios from '../../../utils/axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const baseImageUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

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

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl(""); // close trailer if one is open
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v")); // YouTube video ID
        })
        .catch((error) => console.error("Trailer not found", error));
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2 className="row_title">{title}</h2>

      <div className="row_posters">
        {movies.map((movie) =>
          (isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path) ? (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${baseImageUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
            />
          ) : null
        )}
      </div>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
