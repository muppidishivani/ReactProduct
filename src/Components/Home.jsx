import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GitHubLoginComponent from './GitHUbLoginComponenet';
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleLoginComponent from './GoogleLoginComponent';

const Home = () => (
  <div
    style={{
      backgroundImage: 'url("welcome.png")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      display: 'flex', // Flexbox for centering
      alignItems: 'center', // Vertically center
      justifyContent: 'center', // Horizontally center
    }}
  >
    <div className="container text-center">
      <h1 className="display-5 text-primary mb-3">Welcome to Food Menu!</h1>
      <p className="lead text-success">
        <i><h1>
        enjoy fresh and tasty veg and non-veg dishes, made just for you...!
          </h1></i>
      </p>
      <GitHubLoginComponent />
      <GoogleOAuthProvider clientId="221418219215-u3j4c4am3trvvte1cptrlnp2ss9afev1.apps.googleusercontent.com">
        <GoogleLoginComponent />
      </GoogleOAuthProvider>
    </div>
  </div>
);

export default Home;
