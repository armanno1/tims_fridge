import { useState, useEffect } from 'react'
import Fridge from './components/Fridge';
import Dashboard from './components/Dashboard';
import useFirestore from './hooks/useFirestore';
import SignInScreen from './components/SignInScreen';
import firebase from 'firebase';

function App() {

  const [dashVisible, setDashVisible] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const images = useFirestore('images');    
  const urlData = useFirestore('urls'); //does this need to be state? hmm not sure.

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  let urlArray = [...Array(60)];
  urlData.forEach((el) => {
          if (el.id && el.url) {
              urlArray[Number(el.id - 1)] = el.url;
          }
      }
  );

  const showDash = () => setDashVisible(true);
  const hideDash = () => setDashVisible(false);
  
  return (
    <>
      <div className="container">
        <Fridge images={images} urlArray={urlArray} />
        <div style={{textAlign: 'center', padding: '10px 0 0 0'}}>
          {isSignedIn ? <div style={{display: 'inline-block', color: 'white', fontWeight: 'bold', cursor: 'pointer', backgroundColor: 'rgba(0, 98, 102,1.0)', padding: '8px 18px', borderRadius: '5px'}} onClick={showDash}>Open Dashboard! ⚡</div> : <div style={{color: 'white', fontSize: ".9em", fontWeight: 'normal'}}>Own this fridge? <span onClick={() => setShowLoginModal(true)} style={{cursor: 'pointer', fontWeight: 'bold'}}>Login</span></div> }
          <SignInScreen isSignedIn={isSignedIn} showLoginModal={showLoginModal} setShowLoginModal={setShowLoginModal} />
          <Dashboard showDash={showDash} hideDash={hideDash} dashVisible={dashVisible} images={images} urlArray={urlArray} />
        </div>
      </div>
    </>
  );
}

export default App;
