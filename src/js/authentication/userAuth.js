import { getItem } from "../localStorage/getItem";
import { setIsLoggedIn } from "../hooks/userAuth";

export function handleUserAuth(dispatch) {
  if(getItem("token")) {
    dispatch(setIsLoggedIn(true));
  } else {
    dispatch(setIsLoggedIn(false));
  }
}
