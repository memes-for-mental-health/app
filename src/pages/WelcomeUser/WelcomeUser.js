import React from 'react';
import Button from '../../components/Button/Button';

import styles from './WelcomeUser.module.css';

const WelcomeUser = ({ setMood, name }) => {
  return (
    <div className={styles.enterName}>
      <h1>Welcome {name}</h1>
      <div className={styles.container}>
        <div className={styles.title}>How are you doing?</div>

        <Button className={styles.button} onClick={() => setMood('sad')}>
          Sad &#128532;
        </Button>
        <Button className={styles.button} onClick={() => setMood('mad')}>
          Mad &#128545;
        </Button>
        <Button className={styles.button} onClick={() => setMood('lonely')}>
          Lonely &#128148;
        </Button>

        <Button className={styles.button} onClick={() => setMood('anxious')}>
          Anxious &#128534;
        </Button>
      </div>
    </div>
  );
};

export default WelcomeUser;
