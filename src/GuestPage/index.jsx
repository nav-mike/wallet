import React from 'react';
import PropTypes from 'prop-types';

const GuestPage = ({ firebase }) => (
  <div>
    <button
      type="button"
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

GuestPage.propTypes = {
  firebase: PropTypes.shape({
    auth: PropTypes.oneOfType([
      PropTypes.shape({ GoogleAuthProvider: PropTypes }),
      PropTypes.func.isRequired,
    ]),
  }).isRequired,
};

export default GuestPage;
