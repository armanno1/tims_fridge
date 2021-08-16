import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import { uiConfig } from '../firebase/config';
import styles from './SignInScreen.module.css';

const SignInScreen = ({ isSignedIn, showLoginModal, setShowLoginModal }) => {
  
    const logOut = () => {
        firebase.auth().signOut()
        setShowLoginModal(false)
    }
    // Listen to the Firebase Auth state and set the local state.
  
    if (!isSignedIn) {
      if (showLoginModal) {
        return (
            <div className={styles.backdrop}>
                <div className={styles.loginModal}>
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                    <span onClick={() => setShowLoginModal(false)} style={{color: 'white', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold'}}><br />Close</span> 
                </div>
            </div>
          );
      }
      return(null)
    }
    return (
        <div style={{color: 'white', fontSize: '.8rem'}}>
            {/*<p>Hi {firebase.auth().currentUser.displayName}!</p>*/}
            <p>Hi Tim. <span onClick={logOut} style={{cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold'}}>Sign-out</span></p>
        </div>
    );
  }

  export default SignInScreen;
  