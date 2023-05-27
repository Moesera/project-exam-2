import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGet } from "../../js/hooks/service/get";
import { getItem } from "../../js/localStorage/getItem";
import { profile } from "../../js/helpers/constant";

import UserProfile from "../../js/components/Profile";
import UserProfileManager from "../../js/components/Profile/UserProfile";

function Profile() {
  let { name } = useParams();
  const user = getItem("user");

  const { data: userData, isLoading: isLoadingUser, isError: isErrorUser } = useGet(profile + name + "?_bookings=true");
  const { data: venuesData, isLoading: isLoadingVenues, isError: isErrorVenues } = useGet(profile + name + "/venues");

  const [showUserProfile, setShowUserProfile] = useState(false);

  if(isLoadingUser) {
    return (
        <div class="flex items-center justify-center min-h-screen p-5 bg-gray-100 min-w-screen">
          <div class="flex space-x-2 animate-pulse">
            <div class="w-3 h-3 bg-ocean rounded-full"></div>
            <div class="w-3 h-3 bg-ocean rounded-full"></div>
            <div class="w-3 h-3 bg-ocean rounded-full"></div>
          </div>
        </div>
    );
  }

  if (isErrorUser) {
    return <div>Error</div>;
  }

  if (userData) {
    if (user.name !== userData.name) {
      return <UserProfile userData={userData} venuesData={venuesData} isLoadingVenues={isLoadingVenues} isErrorVenues={isErrorVenues} setShowUserProfile={setShowUserProfile} user={user}/>;
    }

    if (showUserProfile) {
      return <UserProfile userData={userData} venuesData={venuesData} isLoadingVenues={isLoadingVenues} isErrorVenues={isErrorVenues} setShowUserProfile={setShowUserProfile} user={user}/>;
    }

    return <UserProfileManager userData={userData} venuesData={venuesData} setShowUserProfile={setShowUserProfile}/>;
  }
}

export default Profile;
