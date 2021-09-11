import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Memes = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const response = await axios.get('https://www.reddit.com/r/memes/hot/.json?count=20');
    setData(response.data.data.children)
  }, []);

  

  return <div className="memes">Memes
    {data.map((item, idx) => {
      console.log(item)
      return (
        <>
        <img  key={idx} src={item.data.url_overridden_by_dest} />
        
        </>
      )
    })}
  </div>;
};

export default Memes;
