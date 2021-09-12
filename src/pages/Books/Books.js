import React, {useEffect, useState} from 'react';
import axios from 'axios';

import './Books.css';


const Books = () => {
  const [data, setData] = useState([]);
  const links = {}

  useEffect(async () => {
    const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=subject:fantasy');
    console.log(response)
    setData(response.data.items)
  }, []);

  return <div>
    <div class = "header"> Books</div>
    {data.map((item, idx) => {
      console.log(item)
      return (
        <>
      <div class="title">{item.volumeInfo.title}</div>
      <a href={item.volumeInfo.infoLink}> 
      <img className="books" key={idx} src={item.volumeInfo.imageLinks.thumbnail} /> 
      </a>
      <div class="author">By {item.volumeInfo.authors}</div>
      
      {/*<div class = "link">{item.volumeInfo.infoLink}</div>  fantasy, humor, self-help*/ }
      
        </>
      )
    })}

  </div>;
  
  
  


};

export default Books;
