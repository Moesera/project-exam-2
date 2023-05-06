import removeItem from "../../../localStorage/removeItem";
import { useNavigate } from "react-router-dom";
import { useGoBack } from "../../../hooks/tools/useGoBack";

import CardComponent from "../../Card/index";
// media
import ArrowRight from "../../../../assets/interface/icons8-chevron-right.png";
import HouseIcon from "../../../../assets/interface/icons8-home-100.png";
import EditHouseIcon from "../../../../assets/interface/icons8-home-automation-100.png";
import EditBookingIcon from "../../../../assets/interface/icons8-schedule-100.png";
import SupportIcon from "../../../../assets/interface/icons8-technical-support-100.png";
// import { handleAvatarImgError } from "../../../helpers/placeholder";

function UserProfileManager({userData, setShowUserProfile }) {
  const navigate = useNavigate();
  const goBack = useGoBack();

  function showProfile() {
    setShowUserProfile(true);
  }

  function logout() {
    removeItem("token");
    removeItem("user");
    navigate("/");
  }
  
return (
  <main className="pt-72 bg-[#FDFDFD] w-3.5/7 mx-auto xl:w-desktop mb-14">
  <div className="hover:underline hover:cursor-pointer" onClick={goBack}>Back</div>
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
{/* i want to open a modal for each card that contains a something, contact (form)
manage rented apartments shows all apartments, when you click on it you go to the venue's page
you get options edit and delete, on edit the listing turns into a form, if you choose
rent your apartment you get a form witch you need to fill and send, get verification and click back*/}
  {userData.venueManager ? (
    <section className="flex flex-col gap-10 pb-10 mt-10 border-b-2 border-gray">
      <CardComponent title="Rent out your apartment" content="Start earning your money now by renting your apartment" media={HouseIcon} alt="House" />
      <CardComponent title="Manage your rented apartments" content="Edit your apartments and delete your rented apartments" media={EditHouseIcon} alt="Edit house" />
      <CardComponent title="Manage your bookings" content="See, edit and cancel your bookings" media={EditBookingIcon} alt="Schedule" />
      <CardComponent
        title="Contact customer support"
        content="If you have any issues or feedback,
please feel free to contact us at customer support"
        media={SupportIcon}
        alt="Support"
      />
    </section>
  ) : (
    <section className="flex flex-col gap-10 pb-10 mt-10 border-b-2 border-gray">
      <CardComponent title="Manage your bookings" content="See, edit and cancel your bookings" media={EditBookingIcon} alt="Schedule" />
      <CardComponent
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
)
}

export default UserProfileManager