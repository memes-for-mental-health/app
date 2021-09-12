import React from 'react';
import { useHistory } from 'react-router';
import List from '../../components/List/List';

import styles from './Media.module.css';

const Media = () => {
  const history = useHistory();
  const media = [
    { data: 'Memes', onClick: () => history.push('/memes') },
    { data: 'Movies', onClick: () => history.push('/movies') },
    { data: 'Quote', onClick: () => history.push('/quotes') },
    { data: 'Books', onClick: () => history.push('/books') },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.media}>
        <div className={styles.text}>What you interested in?</div>
        <List listItems={media} />
      </div>
    </div>
  );
};

export default Media;
