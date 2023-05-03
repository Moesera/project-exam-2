import React, { useState } from 'react';

export function Auth() {
  // export this or set / get this in Nav to pass it down to the profile component
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  // maybe export a function like this for login and logout to set 
  // login false and delete elements in local storage
  function handleLogin() {
    // Handle login
    setIsLoggedIn(true);
  }

  // Use is logged in to render the this to the profile text.
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

// use this to check for the urls that needs auth check, check the token
// return the login modal or a toaster to notify the user that they need to login if not valid.
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