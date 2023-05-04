import { URLS_REQ_AUTH } from '../helpers/constant';

// use this to check for the urls that needs auth check, check the token
// return the login modal or a toaster to notify the user that they need to login if not valid.
export function checkAuthAndFetch(url) {

  if (URLS_REQ_AUTH.includes(url) && !localStorage.getItem('token')) {
    // Show login popup or error message
    // relocate the user to the homepage and then open the login modal
    return false;
  } else {
    // Proceed to fetch data
    return true;
  }
}