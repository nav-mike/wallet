import './App.css';
import Budget from './Budget';
import Outcomes from './Outcomes';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseUnAuthed
} from '@react-firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAbfDg5M7m5Cvfm5ZrBwBKUcsxifnLWvzw",
  authDomain: "wallet-ef833.firebaseapp.com",
  projectId: "wallet-ef833",
  storageBucket: "wallet-ef833.appspot.com",
  messagingSenderId: "127993178832",
  appId: "1:127993178832:web:e06a89b45b1019dbbdccd5"
};

// function App() {
//   return (
//     <div className="App App__container_flex-columns">
//       <Budget />
//       <Outcomes />
//     </div>
//   );
// }

function App() {
  return(
    <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
      <button
        onClick={() => {
          const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
          firebase.auth().signInWithPopup(googleAuthProvider);
        }}
      >
        Sign In with Google
      </button>
      <button
        onClick={() => {
          firebase.auth().signOut();
        }}
      >
        Sign Out
      </button>
      <FirebaseAuthConsumer>
        {({ isSignedIn, user, providerId }) => {
          return (
            <pre style={{ height: 300, overflow: "auto" }}>
              {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
            </pre>
          );
        }}
      </FirebaseAuthConsumer>
      <IfFirebaseAuthed>
        {() => {
          return <div>You are authenticated</div>;
        }}
      </IfFirebaseAuthed>
      <IfFirebaseUnAuthed>
        {() => {
          return <div>You are not authenticated</div>;
        }}
      </IfFirebaseUnAuthed>
    </FirebaseAuthProvider>
  );
}

export default App;
