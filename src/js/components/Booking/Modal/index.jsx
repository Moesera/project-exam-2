import Modal from "react-responsive-modal";
import { useDispatch } from "react-redux";
import { closeBooking } from "../../../hooks/bookingModal";

import Booking from "..";

export default function BookingModal({ open, venueId, venueGuests, bookingsArray }) {
  const dispatch = useDispatch();

  return (
    <div>
      <Modal
        classNames={{
          overlay: "fixed inset-0 w-full h-full bg-white bg-opacity-50 z-50",
          modal: "absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] bg-white border z-50 rounded-2xl",
        }}
        open={open}
        onClose={() => dispatch(closeBooking())}
        showCloseIcon={false}
        center
      >
        <Booking venueId={venueId} venueGuests={venueGuests} bookingsArray={bookingsArray}/>
        {/* {show ?  : } */}
      </Modal>
    </div>
  );
}