import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Memes = () => {
  const [data, setData] = useState([]);
  const moods = ['sad', 'angry']
  const links = {'sad': 'https://www.reddit.com/r/aww/hot/.json?limit=40'
                ,'angry':'https://www.reddit.com/r/memes/hot/.json?limit=40'
                ,'depressed':'https://www.reddit.com/r/2meirl4meirl/hot/.json?limit=40'}

  useEffect(async () => {
    const response = await axios.get('https://www.reddit.com/r/2meirl4meirl/hot/.json?limit=40');
    setData(response.data.data.children)
  }, []);

  

  return <div className="memes">Memes
    {data.map((item, idx) => {
      console.log(item)
      return (
        <img  className="pics" key={idx} src={item.data.url_overridden_by_dest} width="400" 
     height="500"/>
        
      )
    })}
  </div>;
};

export default Memes;
