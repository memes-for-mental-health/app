import React, { useEffect, useState } from 'react';
import axios from 'axios';

import styles from './Memes.module.css';

const Memes = ({ mood }) => {
  const [data, setData] = useState([]);
  const moods = {
    sad: 'https://www.reddit.com/r/aww/hot/.json?limit=40',
    mad: 'https://www.reddit.com/r/memes/hot/.json?limit=40',
    anxious: 'https://www.reddit.com/r/2meirl4meirl/hot/.json?limit=40',
  };

  useEffect(async () => {
    const response = await axios.get(
      'https://www.reddit.com/r/memes/hot/.json?limit=200'
    );
    setData(response.data.data.children);
  }, []);
  console.log('mood is:' + mood)
  return (
    
    <div className={styles.memes}>
      <h1 className={styles.text}>Memes that will cure your {mood}</h1>
      {data.map((item, idx) => {
        console.log(item);
        return (
          <>
            <div className={styles.memepack}>
              {item.data.title}
              <img
                className={styles.memepics}
                key={idx}
                src={item.data.url_overridden_by_dest}
              />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Memes;
