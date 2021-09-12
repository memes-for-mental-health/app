import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Button from '../../components/Button/Button';

import styles from './EnterName.module.css';

const EnterName = ({ setName }) => {
  const [input, setInput] = useState('');
  const history = useHistory();
  const quote = '“Inspirational quote here” - Billy Bob';

  const handleClick = (e) => {
    setName(input);
    console.log(input);
    history.push('/welcome-user');
  };

  return (
    <div className={styles.enterName}>
      <div className={styles.container}>
        <div className={styles.title}>Enter your name</div>
        <input
          className={styles.input}
          placeholder="Name"
          onChange={(e) => setInput(e.target.value)}
        />
        <div className={styles.quoteContainer}>
          <div className={styles.quote}>{quote}</div>
        </div>
        <Button className={styles.button} onClick={handleClick}>
          New Quote
        </Button>
      </div>
    </div>
  );
};

export default EnterName;
