import React from 'react';
import { useHistory } from 'react-router';
import Button from '../../components/Button/Button';

import styles from './WelcomeUser.module.css';

const WelcomeUser = ({ setMood, name }) => {
  const history = useHistory();

  return (
    <div className={styles.enterName}>
      <h1>Welcome {name}</h1>
      <div className={styles.container}>
        <div className={styles.title}>How are you doing?</div>
        <Button
          className={styles.button}
          onClick={() => {
            setMood('sad');
            history.push('/media');
          }}
        >
          Sad &#128532;
        </Button>
        <Button
          className={styles.button}
          onClick={() => {
            setMood('mad');
            history.push('/media');
          }}
        >
          Mad  &#128545;
        </Button>
        <Button
          className={styles.button}
          onClick={() => {
            setMood('happy');
            history.push('/media');
          }}
        >
          Lonely &#128148;
        </Button>
        <Button
          className={styles.button}
          onClick={() => {
            setMood('media');
            history.push('/media');
          }}
        >
          Anxious &#128534;
        </Button>
      </div>
    </div>
  );
};

export default WelcomeUser;
