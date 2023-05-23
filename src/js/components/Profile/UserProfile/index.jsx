import removeItem from "../../../localStorage/removeItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGoBack } from "../../../hooks/tools/useGoBack";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "../../../hooks/userAuth";

import CardComponent from "../../Card/index";
import CreateVenue from "../../CreateVenue";
import EditVenue from "../../EditVenue";
import UserBookings from "../../Bookings";

// media
import ArrowRight from "../../../../assets/interface/icons8-chevron-right.png";
import HouseIcon from "../../../../assets/interface/icons8-home-100.png";
import EditHouseIcon from "../../../../assets/interface/icons8-home-automation-100.png";
import EditBookingIcon from "../../../../assets/interface/icons8-schedule-100.png";
import SupportIcon from "../../../../assets/interface/icons8-technical-support-100.png";
// import { handleAvatarImgError } from "../../../helpers/placeholder";

function UserProfileManager({ userData, venuesData, setShowUserProfile }) {
  const navigate = useNavigate();
  const goBack = useGoBack();
  const dispatch = useDispatch();

  const [activeComponent, setActiveComponent] = useState(null);

  function showProfile() {
    setShowUserProfile(true);
  }

  function logout() {
    removeItem("token");
    removeItem("user");
    navigate("/");
    dispatch(setIsLoggedIn(false));
  }

  // i set an initial state as showing the cards and everything,
  // i them make a switch case to set the active content, if the content changes
  // so does the active content, then have a back button to the initial one.
  switch (activeComponent) {
    case "create":
      return <CreateVenue setActiveComponent={setActiveComponent} />;
    case "edit":
      return <EditVenue setActiveComponent={setActiveComponent} data={venuesData} />;
    case "bookings":
      return <UserBookings setActiveComponent={setActiveComponent} data={userData.bookings} />;
    case "support":
      console.log("support");
      // Open a form to contact support. maybe make an editable form where you can
      // input elements to your own choosing.
      // code
      break;
    default:
      return (
        <main className="pt-72 bg-[#FDFDFD] w-3.5/7 mx-auto xl:w-desktop mb-14">
          <div className="hover:underline hover:cursor-pointer" onClick={goBack}>
            Back
          </div>
          <h1 className="text-5xl font-medium mt-14">Profile</h1>
          <div onClick={showProfile} className="flex items-center gap-4 py-10 mt-12 border-b-2 border-gray group/item hover:cursor-pointer">
            <figure className="w-[5.5rem] h-[5.5rem] md-sm:w-[7rem] md-sm:h-[7rem]">
              <img className="object-cover w-full h-full rounded-full" src={userData.avatar} alt={userData.name} />
            </figure>
            <div className="ml-4">
              <h2 className="font-medium text-1xl md-sm:text-3xl">{userData.name}</h2>
              <p className="text-xl md-sm:text-2xl group-hover/item:underline">Show Profile</p>
            </div>
            <div className="ml-auto w-[2.5rem] md-sm:w-14">
              <img src={ArrowRight} alt="chevron right" />
            </div>
          </div>
          {userData.venueManager ? (
            <section className="flex flex-col gap-10 pb-10 mt-10 border-b-2 border-gray">
              <CardComponent
                setActiveComponent={setActiveComponent}
                id="create"
                title="Rent out your apartment"
                content="Start earning your money now by renting your apartment"
                media={HouseIcon}
                alt="House"
              />
              <CardComponent
                setActiveComponent={setActiveComponent}
                id="edit"
                title="Manage your rented apartments"
                content="Edit your apartments and delete your rented apartments"
                media={EditHouseIcon}
                alt="Edit house"
              />
              <CardComponent
                setActiveComponent={setActiveComponent}
                id="bookings"
                title="Manage your bookings"
                content="See, edit and cancel your bookings"
                media={EditBookingIcon}
                alt="Schedule"
              />
              <CardComponent
                setActiveComponent={setActiveComponent}
                id="support"
                title="Contact customer support"
                content="If you have any issues or feedback,
  please feel free to contact us at customer support"
                media={SupportIcon}
                alt="Support"
              />
            </section>
          ) : (
            <section className="flex flex-col gap-10 pb-10 mt-10 border-b-2 border-gray">
              <CardComponent
                setActiveComponent={setActiveComponent}
                id="bookings"
                title="Manage your bookings"
                content="See, edit and cancel your bookings"
                media={EditBookingIcon}
                alt="Schedule"
              />
              <CardComponent
                setActiveComponent={setActiveComponent}
                id="support"
                title="Contact customer support"
                content="If you have any issues or feedback,
  please feel free to contact us at customer support"
                media={SupportIcon}
                alt="Support"
              />
            </section>
          )}
          <button type="button" onClick={() => logout()} className="w-full py-4 mt-10 font-medium shadow-3xl rounded-xl hover:underline">
            log out
          </button>
        </main>
      );
  }
}

export default UserProfileManager;
