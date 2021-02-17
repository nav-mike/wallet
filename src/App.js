import './App.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseUnAuthed
} from '@react-firebase/auth';
import GuestPage from './GuestPage';
import UserPage from './UserPage';

const firebaseConfig = {
  apiKey: "AIzaSyAbfDg5M7m5Cvfm5ZrBwBKUcsxifnLWvzw",
  authDomain: "wallet-ef833.firebaseapp.com",
  projectId: "wallet-ef833",
  storageBucket: "wallet-ef833.appspot.com",
  messagingSenderId: "127993178832",
  appId: "1:127993178832:web:e06a89b45b1019dbbdccd5"
};

function App() {
  return(
    <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
      <div className="App App__container_flex-columns">
        <FirebaseAuthConsumer>
        </FirebaseAuthConsumer>
        <IfFirebaseAuthed>
          {({ isSignedIn, user, providerId }) => {
            return(
              <div>
                <button
                  className="Guest-page__login-button"
                  onClick={() => {
                    firebase.auth().signOut();
                  }}
                >
                  Sign Out
                </button>
                <UserPage credentials={{ isSignedIn, user, providerId }} />
              </div>
            );
          }}
        </IfFirebaseAuthed>
        <IfFirebaseUnAuthed>
          <GuestPage firebase={firebase} />
        </IfFirebaseUnAuthed>
      </div>
    </FirebaseAuthProvider>
  );
}

export default App;
