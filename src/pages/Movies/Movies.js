import React, { useEffect, useState } from 'react';
import axios from 'axios';

import styles from './Movies.module.css';

const Movies = ({ mood }) => {
  const [data, setData] = useState([]);
  const moods = {
    sad: 'https://api.themoviedb.org/3/discover/movie?api_key=f3c918d0bb5af30e06effad7e80a92f7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate',
    mad: 'https://api.themoviedb.org/3/discover/movie?api_key=f3c918d0bb5af30e06effad7e80a92f7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12&with_watch_monetization_types=flatrate',
    lonely: 'https://api.themoviedb.org/3/discover/movie?api_key=f3c918d0bb5af30e06effad7e80a92f7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749&with_watch_monetization_types=flatrate',
    anxious: 'https://api.themoviedb.org/3/discover/movie?api_key=f3c918d0bb5af30e06effad7e80a92f7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=9648&with_watch_monetization_types=flatrate',
  };

  useEffect(async () => {
    const response = await axios.get(
      moods[mood]
    );
    setData(response.data.results);
  }, []);
  console.log('mood is:' + mood)
  return (
    
    <div className={styles.movies}>
      <h1 className={styles.text}>Movies that will cure your {mood}</h1>
      {data.map((item, idx) => {
        console.log(item);
        return (
          <>
            <div className={styles.moviepack}>
              {item.title}
              <img
                className={styles.moviepics}
                key={idx}
                src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
              />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Movies;
