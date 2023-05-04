import { useParams } from "react-router-dom";
import { useGet } from "../../js/hooks/service/get";
import { profile } from "../../js/helpers/constant";

import CardComponent from "../../js/components/Card";
// media
import ArrowRight from "../../assets/interface/icons8-chevron-right.png";
import HouseIcon from "../../assets/interface/icons8-home-100.png";
import EditHouseIcon from "../../assets/interface/icons8-home-automation-100.png";
import EditBookingIcon from "../../assets/interface/icons8-schedule-100.png";
// import SupportIcon from "../../assets/interface/icons8-service-100.png";
import SupportIcon from "../../assets/interface/icons8-technical-support-100.png";

function Profile() {
  let { name } = useParams();
  const { data, isLoading, isError } = useGet(profile + name);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (data) {
    console.log(data);
    return (
      <main className="pt-72 bg-[#FDFDFD] w-3.5/7 mx-auto xl:w-desktop">
        <h1 className="text-5xl font-medium mt-14">Profile</h1>

        <div className="flex items-center gap-4 py-10 mt-12 border-b-2 border-gray group/item hover:cursor-pointer">
          <figure className="w-[5.5rem] h-[5.5rem] md-sm:w-[7rem] md-sm:h-[7rem]">
            <img className="object-cover w-full h-full rounded-full" src={data.avatar} alt={data.name} />
          </figure>
          <div className="ml-4">
            <h2 className="font-medium text-1xl md-sm:text-3xl">{data.name}</h2>
            <p className="text-xl md-sm:text-2xl group-hover/item:underline">Show Profile</p>
          </div>
          <div className="ml-auto w-[2.5rem] md-sm:w-14">
            <img src={ArrowRight} alt="chevron right" />
          </div>
        </div>

        {data.venueManager ? (
          <section className="mt-10 border-b-2 border-gray">
            <CardComponent title="Rent out your apartment" content="Start earning your money now by renting your apartment" media={HouseIcon} alt="House" />
            <CardComponent title="Manage your rented apartments" content="Edit your apartments and delete your rented apartments" media={EditHouseIcon} alt="Edit house" />
            <CardComponent title="Manage your bookings" content="See, edit and cancel your bookings" media={EditBookingIcon} alt="Schedule" />
            <CardComponent title="Contact customer support" content="If you have any issues or feedback,
please feel free to contact us at customer support" media={SupportIcon} alt="Support" />
          </section>
        ) : (
          <section className="flex flex-col gap-10 pb-10 mt-10 border-b-2 border-gray">
            <CardComponent title="Manage your bookings" content="See, edit and cancel your bookings" media={EditBookingIcon} alt="Schedule" />
            <CardComponent title="Contact customer support" content="If you have any issues or feedback,
please feel free to contact us at customer support" media={SupportIcon} alt="Support" />
          </section>
        )}
          <button type="button" className="w-full py-4 mt-10 font-medium shadow-3xl rounded-xl hover:underline">log out</button>
      </main>
    );
  }
}

export default Profile;
