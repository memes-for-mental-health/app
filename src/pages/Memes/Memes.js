import React, {useEffect, useState} from 'react';
import axios from 'axios';

import styles from './Memes.module.css';

const Memes = () => {
  const [data, setData] = useState([]);
  const moods = ['sad', 'angry']
  const links = {'sad': 'https://www.reddit.com/r/aww/hot/.json?limit=40'
                ,'angry':'https://www.reddit.com/r/memes/hot/.json?limit=40'
                ,'depressed':'https://www.reddit.com/r/2meirl4meirl/hot/.json?limit=40'}

  useEffect(async () => {
    const response = await axios.get('https://www.reddit.com/r/memes/hot/.json?limit=200');
    setData(response.data.data.children)
  }, []);

  

  return <div className={styles.memes}>Memes that will cure your
    {data.map((item, idx) => {
      console.log(item)
      return (
        <>
        <div className={styles.memepack}>{item.data.title}
        <img  className={styles.memepics} key={idx} src={item.data.url_overridden_by_dest}/>
        </div>
        
        </>
        
      )
    })}
  </div>;
};

export default Memes;
