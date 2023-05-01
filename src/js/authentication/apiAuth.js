import React, { useState } from 'react';

export function Auth() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('apiAuth'));

  function handleLogin() {
    // Handle login
    setIsLoggedIn(true);
  }

  return (
    <div>
      {isLoggedIn ? (
        <>
          {/* Show content for logged-in users */}
          <a href="/profile">Profile</a>
        </>
      ) : (
        <>
          {/* Show content for non-logged-in users */}
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
}

export function checkAuthAndFetch(url) {
  const urlsThatRequireAuth = ['/data1', '/data2'];
  if (urlsThatRequireAuth.includes(url) && !localStorage.getItem('apiAuth')) {
    // Show login popup or error message
    // Change profile link to login link
    document.getElementById('profile-link').textContent = 'Login';
    document.getElementById('profile-link').href = '/login';
  } else {
    // Proceed to fetch data
  }
}