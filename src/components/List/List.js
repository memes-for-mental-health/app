import React from 'react';

import styles from './List.module.css';

const List = ({ listItems }) => {
  return (
    <>
      {listItems.map((listItem, idx) => {
        return (
          <div className={styles.listItem} key={idx} onClick={listItem.onClick}>
            {listItem.data}
          </div>
        );
      })}
    </>
  );
};

export default List;
