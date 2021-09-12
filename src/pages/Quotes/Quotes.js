import React, { useEffect, useState } from 'react';
import axios from 'axios';

import styles from './Quotes.module.css';

const moodKeys = {
  angry: 'patience',
  anxious: 'motivational',
  sad: 'peace',
  lonely: 'marriage',
};

const Quotes = ({ mood }) => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const getQuotes = async () => {
      const response = await axios.get(
        `https://goquotes-api.herokuapp.com/api/v1/all?type=tag&val=${moodKeys[mood]}`
      );
      const quoteData = response.data.quotes;
      const randint = Math.random() * (quoteData.length - 5);
      setQuotes(quoteData.slice(randint, randint + 5));
    };
    getQuotes();
  }, []);

  return (
    <div className={styles.quote}>
      <div className={styles.container}>
        <h1>Quotes</h1>
        {quotes.map((quote, idx) => {
          console.log(quote);
          return (
            <div className={styles.quoteBox}>
              <div className={styles.quoteText}>{quote.text}</div>
              <div className={styles.quoteAuthor}>{quote.author}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Quotes;
