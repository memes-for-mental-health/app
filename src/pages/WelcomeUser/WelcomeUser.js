import React from "react";
import Button from '../../components/Button/Button';

import styles from './WelcomeUser.module.css';


const WelcomeUser = ({  }) => {

    return (
        
        
        
        <div className={styles.enterName}>
            <h1>Welcome User</h1>
        <div className={styles.container}>
          <div className={styles.title}>How are you doing?</div>
          
          <Button className={styles.button} >
              Sad
              </Button>
            <Button className={styles.button} >
            Mad
            </Button>
    
            <Button className={styles.button} >
            Sad
            </Button>
            
            <Button className={styles.button} >
            Happy
            </Button>
            
            <Button className={styles.button}>
            Anxious
            </Button>

        </div>
      </div>
    );

};



export default WelcomeUser;