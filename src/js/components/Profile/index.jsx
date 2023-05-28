import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useGoBack } from "../../hooks/tools/useGoBack";
import { openModal } from "../../hooks/modal";

import Venues from "../Venues/index";
import { handleAvatarImgError } from "../../helpers/placeholder";
import EditProfile from "./Edit";
import ModalPopup from "../Modal";

function UserProfile({ userData, venuesData, isLoadingVenues, isErrorVenues, setShowUserProfile, user }) {
  const goBack = useGoBack();
  const isModalOpen = useSelector((state) => state.modal?.isOpen);
  const dispatch = useDispatch();

  function showProfile() {
    setShowUserProfile(false);
  }

  return (
    <main className="pt-60 bg-[#FDFDFD] w-3.5/7 mx-auto xl:w-desktop mb-14">
      <Helmet>
        <title>{userData.name}'s profile | Compasso</title>
        <meta name="description" content={`Check out ${userData.name}'s profile and his venues`} />
      </Helmet>
      {isModalOpen && <ModalPopup open={openModal} content={EditProfile} />}
      {user.name !== userData.name ? (
        <div className="hover:underline hover:cursor-pointer" onClick={goBack}>
          Back
        </div>
      ) : (
        <div className="hover:underline hover:cursor-pointer" onClick={showProfile}>
          Back
        </div>
      )}
      <h1 className="text-5xl font-medium mt-14">Profile</h1>

      {user.name !== userData.name ? (
        <figure className="w-[6rem] h-[6rem] md-sm:w-[9rem] md-sm:h-[9rem] mt-14">
          <img className="object-cover w-full h-full rounded-full" src={userData.avatar} alt={userData.name} onError={handleAvatarImgError} />
        </figure>
      ) : (
        <div className="flex">
          <div className="flex-none group/item">
            <figure className="w-[6rem] h-[6rem] md-sm:w-[9rem] md-sm:h-[9rem] mt-14 group/edit">
              <img className="object-cover w-full h-full rounded-full" src={userData.avatar} alt={userData.name} onError={handleAvatarImgError} />
            </figure>
            <div className="lg:invisible lg:group-hover/item:visible relative text-center bottom-[8rem] left-[3.5rem] md-sm:bottom-[10rem] md-sm:left-[6rem] ">
              <p onClick={() => dispatch(openModal())} className="py-1 w-20 rounded-full hover:underline bg-opacity-80 bg-gray hover:cursor-pointer">
                edit
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-1 pb-4 border-b-2 border-gray mt-14">
        <h2 className="text-3xl font-medium md-sm:text-4xl">{userData.name}</h2>
        <p>Email: {userData.email}</p>
        <p>Status: {userData.venueManager ? <span className="font-bold text-ocean">Renter</span> : <span className="font-bold text-ocean">Vacationist</span>}</p>
      </div>
      {userData.venueManager && (
    venuesData.length < 1 ? (
    <div className="mt-4">Currently no rented venues</div>
  ) : (
    <Venues data={venuesData} isLoading={isLoadingVenues} isError={isErrorVenues} />
  )
)}
    </main>
  );
}

export default UserProfile;
