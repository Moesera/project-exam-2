import { useEffect } from "react";
import { Link } from "react-router-dom";
import { handleUserAuth } from "../../authentication/userAuth";
import { useDispatch } from 'react-redux';
import { openLoginModal } from '../../hooks/loginModal';

import ProfileIcon from "../../../assets/interface/icons8-male-user-64.png";

function ProfileButton({user, isLoggedIn }) {
  
const dispatch = useDispatch();

  useEffect(() => {
    handleUserAuth(dispatch, isLoggedIn);
  });

  return (
    <div>
      {isLoggedIn ? (
            <li className="min-w-[5rem] p-2 hover:cursor-pointer border-b-4 hover:border-gray border-white">
            <Link to={`/profile/${user.name}`} className="flex flex-col items-center text-base ">
              <img className="w-12" src={ProfileIcon} alt="profile img" />
              Profile
            </Link>
          </li>
      ) : (
        <li className="min-w-[5rem] p-2 hover:cursor-pointer border-b-4 hover:border-gray border-white">
        <Link onClick={() => dispatch(openLoginModal())} className="flex flex-col items-center text-base ">
          <img className="w-12" src={ProfileIcon} alt="profile img" />
          login
        </Link>
      </li>
      )}
    </div>
  );
}

export default ProfileButton