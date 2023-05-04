

export function handleUserAuth( setIsLoggedIn ) {
// should check if the token is in local storage.
  if(localStorage.getItem("token")) {
    handleLogin(setIsLoggedIn);
  } 

}

// maybe export a function like this for login and logout to set 
// login false and delete elements in local storage
export function handleLogin( setIsLoggedIn ) {
  // Handle login by setting the isLogged inn to true 
  // and switching the button to profile
  setIsLoggedIn(true);
}

export function handleLogout(setIsLoggedIn) {
  setIsLoggedIn(false)
}