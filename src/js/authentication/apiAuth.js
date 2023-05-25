// import { Navigate } from "react-router-dom";
import { URLS_REQ_AUTH } from "../helpers/constant";
/**
 * TODO Check if there is an authorization in application / localStorage instead.
 * ! use the non authorized endpoints to pass over the check..
 */
{/* <Navigate to="/dashboard" replace={true} /> */}
// use this to check for the urls that needs auth check, check the token
// return the login modal or a toaster to notify the user that they need to login if not valid.
export function checkAuthAndFetch(url) {
  if (URLS_REQ_AUTH.includes(url)) {
    return true;
  } else {
    return false;
  }
}
