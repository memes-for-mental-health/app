import React from 'react';
import List from '../../components/List/List';

import styles from './Media.module.css';

const Media = () => {
  const data = [
    { data: 'Movie' },
    { data: 'Video' },
    { data: 'Quote' },
    { data: 'Books' },
  ];

  return (
    <div className={styles.media}>
      <div className={styles.container}>
        <div>What you interested in?</div>
        <List listItems={data} />
      </div>
    </div>
  );
};

export default Media;
