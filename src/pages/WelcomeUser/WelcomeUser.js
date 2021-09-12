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
          Sad
        </Button>
        <Button className={styles.button} onClick={() => setMood('mad')}>
          Mad
        </Button>
        <Button className={styles.button} onClick={() => setMood('happy')}>
          Happy
        </Button>

        <Button className={styles.button} onClick={() => setMood('anxious')}>
          Anxious
        </Button>
      </div>
    </div>
  );
};

export default WelcomeUser;
