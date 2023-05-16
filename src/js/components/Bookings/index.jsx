import { Link, useLocation } from "react-router-dom";
import chevronRight from "../../../assets/interface/icons8-chevron-right.png";

import BookingDate from "../BookingDate";

function UserBookings({ setActiveComponent, data }) {
let location = useLocation()

console.log(data)
  function goBack() {
    setActiveComponent("default");
  }



  return (
    <main className="pt-72 bg-[#FDFDFD] w-3.5/7 mx-auto xl:w-desktop mb-14">
      <div className="hover:underline hover:cursor-pointer" onClick={goBack}>
        Back
      </div>
      <h1 className="py-10 mt-12 text-4xl font-medium">Bookings</h1>
      {data ? (
        <section className="flex flex-col gap-4">
          {data.map((bookings) => (
            <Link to={{ pathname: `/venue/${bookings.venue.id}`, state: {from: location} }} key={bookings.id} className="flex items-center justify-between min-h-[10rem] gap-2 px-4 py-2 rounded-xl shadow-3xl group/item hover:cursor-pointer">
              <div>
                <h2 className="mb-2 font-semibold sm:truncate">{bookings.venue.name}</h2>
                <p>{bookings.guests} Guests</p>
              <BookingDate dateFrom={bookings.dateFrom} dateTo={bookings.dateTo}/>
              </div>
              <figure className="ml-auto w-[3rem] md-sm:w-14">
                <img className="invisible object-cover w-full h-full group-hover/item:visible" src={chevronRight} alt={"chevron right"} />
              </figure>
            </Link>
          ))}
        </section>
      ) : (
        <section>You have no upcoming bookings</section>
      )}
    </main>
  );
}

export default UserBookings;
