import React from 'react';

import styles from './List.module.css';

const List = ({ listItems }) => {
  return (
    <>
      {listItems.map((listItem, idx) => {
        return (
          <div className={styles.listItem} key={idx}>
            {listItem.data}
          </div>
        );
      })}
    </>
  );
};

export default List;
