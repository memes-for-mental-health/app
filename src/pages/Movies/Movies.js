import React, { useEffect, useState } from 'react';
import axios from 'axios';

import styles from './Movies.module.css';

const Movies = ({ mood }) => {
  const [data, setData] = useState([]);
  const moods = {
    sad: 'https://www.reddit.com/r/aww/hot/.json?limit=40',
    mad: 'https://www.reddit.com/r/memes/hot/.json?limit=40',
    anxious: 'https://www.reddit.com/r/2meirl4meirl/hot/.json?limit=40',
  };

  useEffect(async () => {
    const response = await axios.get(
      'https://api.themoviedb.org/3/discover/movie?api_key=f3c918d0bb5af30e06effad7e80a92f7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate'
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
