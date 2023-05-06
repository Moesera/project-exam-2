import { useEffect } from "react";
import { Link } from "react-router-dom";
import { openModal } from "../../helpers/modal";
import { handleUserAuth } from "../../authentication/userAuth";

import ProfileIcon from "../../../assets/interface/icons8-male-user-64.png";

function ProfileButton({ setOpen, setShow, isLoggedIn, setIsLoggedIn }) {

  useEffect(() => {
    handleUserAuth(setIsLoggedIn);
  })

  const user = JSON.parse(localStorage.getItem("user"));
  
  // Use is logged in to render the this to the profile text.
  return (
    <div>
      {isLoggedIn ? (
            <li className="min-w-[5rem] p-2 rounded-lg hover:cursor-pointer hover:shadow-inner">
            <Link to={`/profile/${user.name}`} className="flex flex-col items-center text-base ">
              <img className="w-12" src={ProfileIcon} alt="profile img" />
              Profile
            </Link>
          </li>
      ) : (
        <li className="min-w-[5rem] p-2 rounded-lg hover:cursor-pointer hover:shadow-inner">
        <Link onClick={() => openModal({ setOpen, setShow })} className="flex flex-col items-center text-base ">
          <img className="w-12" src={ProfileIcon} alt="profile img" />
          login
        </Link>
      </li>
      )}
    </div>
  );
}

export default ProfileButton