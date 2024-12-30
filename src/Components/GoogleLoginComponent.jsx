import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';

function GoogleLoginComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleSuccess = (credentialResponse) => {
    console.log('Login Success:', credentialResponse);
    const userProfile = decodeJwt(credentialResponse.credential);
    if (userProfile?.name) {
      setUserName(userProfile.name);
      setIsLoggedIn(true);
    }
  };

  const handleError = () => {
    console.log('Login Failed');
  };

  const decodeJwt = (token) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      return JSON.parse(window.atob(base64));
    } catch (error) {
      console.error('Failed to decode JWT:', error);
      return null;
    }
  };

  return (
    <div className="card text-center mx-auto my-5" style={{ width: '20rem' }}>
    <div className="card-body">
      <h4 className="card-title mb-3 text-info">Login with Google</h4>
      
      {!isLoggedIn ? (
        <div className="d-flex justify-content-center mb-2 w-100">
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={handleError}
            useOneTap
            className="btn btn-primary w-100"
          />
        </div>
      ) : (
        <div className="text-center mb-3">
          <h3>Welcome, {userName}</h3>
        </div>
      )}
    </div>
  </div>
);
};

export default GoogleLoginComponent;
