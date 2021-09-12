import React, { Component } from 'react';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import { withRouter } from 'react-router';
import GoogleLogin from 'react-google-login';

import styles from './Login.module.css';

class GoogleSocialAuth extends Component {
  render() {
    const { history } = this.props;

    const googleSuccess = (response) => {
      history.push('/enter-name');
    };

    const googleFailure = () => {
      console.log('U clicked me');
    };

    return (
      <div className="App">
        <div className={styles.container}>
          <div className={styles.login}>
            <h1 className={styles.title}>Memes for Mental Health</h1>
            <Logo />
            <GoogleLogin
              className={styles.googleLogin}
              clientId="226566158404-f3ppc07qjl0cql1v7m6936g9vuh1sd1i.apps.googleusercontent.com"
              buttonText="LOGIN WITH GOOGLE"
              onSuccess={googleSuccess}
              onFailure={googleFailure}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(GoogleSocialAuth);
