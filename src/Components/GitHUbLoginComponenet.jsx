import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function GitHubLoginComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const clientId = 'Ov23liYo2kH7VojYGzUU'; // Replace with your GitHub Client ID
  const clientSecret = '8d4323d9de7a30fa4c9f63119db768b87ed29206'; // Replace with your GitHub Client Secret

  // Redirect to GitHub for login
  const handleGitHubLogin = () => {
    const redirectUri = 'http://localhost:5173/'; // The redirect URI after successful login
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}`;
  };

  // After redirect from GitHub, use the authorization code to get user data
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const code = query.get('code');

    if (code) {
      // Exchange the code for an access token
      fetch(`https://github.com/login/oauth/access_token?client_id=${clientId}&client_secret=${clientSecret}&code=${code}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
        .then(response => response.json())
        .then(data => {
          const accessToken = data.access_token;
          if (accessToken) {
            // Fetch user data from GitHub
            fetch('https://api.github.com/user', {
              headers: {
                Authorization: `token ${accessToken}`,
              },
            })
              .then(res => res.json())
              .then(userData => {
                setUserName(userData.name || userData.login);
                setUserAvatar(userData.avatar_url);
                setIsLoggedIn(true);
              })
              .catch(error => console.error('Error fetching user data:', error));
          }
        })
        .catch(error => console.error('Error fetching access token:', error));
    }
  }, []);

 
    return (
      <div className="card text-center mx-auto my-5" style={{ width: '18rem' }}>
        <div className="card-body">
          {/* If not logged in, show the login button */}
          {!isLoggedIn ? (
            <>
              <h4 className="card-title mb-4 text-info">Login with GitHub</h4>
              <div className="d-flex justify-content-center">
                <button 
                  className="btn btn-primary w-100"
                  onClick={handleGitHubLogin}
                >
                  Login with GitHub
                </button>
              </div>
            </>
          ) : (
            <div>
              <h2 className="card-title">Welcome, {userName}</h2>
              {userAvatar && (
                <img
                  src={userAvatar}
                  alt="User Avatar"
                  className="img-fluid mt-3 rounded-circle"
                  style={{ width: '50px' }}
                />
              )}
            </div>
          )}
        </div>
      </div>
    );
  };
export default GitHubLoginComponent;
