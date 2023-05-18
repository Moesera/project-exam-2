import { Link, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import BookingDate from "../BookingDate";
import { useApi } from "../../hooks/service/api";
import { bookings } from "../../helpers/constant";
import { useState } from "react";

function UserBookings({ setActiveComponent, data }) {
  const location = useLocation();
  const [bookingsData, setBookingsData] = useState(data);
  const notify = () =>
    toast.success("Booking deleted", {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: true,
      theme: "colored",
      closeOnClick: true,
    });

  function DeleteButton({ id, setBookingsData }) {
    const { apiData } = useApi(bookings + id);

    function handleDeleteBooking() {
      const method = "DELETE";
      apiData(null, method);

      const updatedBookingsData = bookingsData.filter((bookings) => bookings.id !== id);
      setBookingsData(updatedBookingsData);
      notify();
    }

    return (
      <button
        type="button"
        onClick={() => handleDeleteBooking(id)}
        className="invisible p-2 font-medium border rounded-lg hover:bg-opacity-80 bg-error hover:cursor-pointer group-hover/item:visible"
      >
        Delete
      </button>
    );
  }

  function goBack() {
    setActiveComponent("default");
  }
console.log(bookingsData);
  return (
    <main className="pt-72 bg-[#FDFDFD] w-3.5/7 mx-auto xl:w-desktop mb-14">
      <ToastContainer />
      <div className="hover:underline hover:cursor-pointer" onClick={goBack}>
        Back
      </div>
      <h1 className="py-10 mt-12 text-4xl font-medium">Bookings</h1>
      {bookingsData.length > 0 ? (
        <section className="flex flex-col gap-4">
          {bookingsData.map((bookings) => (
            <div key={bookings.id} className="flex items-center justify-between min-h-[10rem] gap-2 px-4 py-2 rounded-xl shadow-3xl group/item hover:cursor-pointer">
              <div>
                <div className="flex justify-between">
                  <h2 className="mb-2 font-semibold sm:truncate">{bookings.venue.name}</h2>
                </div>
                <p>{bookings.guests} Guests</p>
                <BookingDate dateFrom={bookings.dateFrom} dateTo={bookings.dateTo} />
              </div>
              <div className="flex flex-col gap-4">
                <DeleteButton id={bookings.id} setBookingsData={setBookingsData} />
                <Link
                  to={{ pathname: `/venue/${bookings.venue.id}`, state: { from: location } }}
                  className="invisible p-2 font-medium border rounded-lg hover:bg-opacity-80 bg-success hover:cursor-pointer group-hover/item:visible"
                >
                  Venue
                </Link>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <section>You have no upcoming bookings</section>
      )}
    </main>
  );
}

export default UserBookings;
