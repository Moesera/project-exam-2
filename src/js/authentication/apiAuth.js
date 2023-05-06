import { Navigate } from "react-router-dom";
import { URLS_REQ_AUTH } from "../helpers/constant";
import { getItem } from "../localStorage/getItem";

// use this to check for the urls that needs auth check, check the token
// return the login modal or a toaster to notify the user that they need to login if not valid.
export function checkAuthAndFetch(url) {
  if (URLS_REQ_AUTH.includes(url) && !getItem("token")) {
    return;
  } else {
    return <Navigate to="/dashboard" replace={true} />;
  }
}
