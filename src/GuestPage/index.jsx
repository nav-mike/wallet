const GuestPage = (props) => {
  const firebase = props.firebase;
  return(
    <div>
      <button
        className="Guest-page__login-button"
        onClick={() => {
          const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
          firebase.auth().signInWithPopup(googleAuthProvider);
        }}
      >
        Sign In with Google
      </button>
    </div>
  );
}

export default GuestPage;