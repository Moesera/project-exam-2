import { closeBooking } from "../../hooks/bookingModal";
import { useDispatch } from "react-redux";

function Booking() {
  const dispatch = useDispatch();

  return (
    <section className="w-[25rem] h-[40rem] m-2 p-2">
      <div>
        <button className="mb-2 hover:underscore" onClick={() => dispatch(closeBooking())}>close</button>
      </div>
      <h2>Booking</h2>
      <div>
        <button className="flex-1 px-4 py-2 border rounded-lg bg-ocean hover:cursor-pointer">Book</button>
      </div>
    </section>
  );
}

export default Booking;
