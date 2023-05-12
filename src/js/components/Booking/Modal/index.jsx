import Modal from "react-responsive-modal";
import { useDispatch } from "react-redux";
import { closeBooking } from "../../../hooks/bookingModal";

import Booking from "..";

// blur-lg

/**
 * popup modal.
 * @returns a popup modal with content provided
 * @example
 * ```
 * // imports
 * import { openModal, closeModal } from "helpers";
 * import ComponentA from './ComponentA';
 * import ComponentB from './ComponentB';
 *
 * // buttons to create
 * <button onClick={openModal(setOpen)}></button>
 * // you can place close inside the modal.
 * <button onClick={closeModal(setOpen)}></button>
 *
 * function App() {
 * // you can pass down two components to switch between in the modal,
 * // You can also pass it down to replace the modal items or item to f.eks success message.
 * const [components, setComponents] = useState([ComponentA, ComponentB]);
 * const [open, setOpen] = useState(false);
 * const [showLogin, setShowLogin] = useState(true);
 *
 * return (
 *   <>
 *     <button onClick={openModal(setOpen)}></button>
 *     <PopupModal setShow={showLogin} components={components} setComponents={setComponents} setOpen={setOpen} open={open}/>
 *   </>
 *  )
 * }
 *
 * ```
 */
export default function BookingModal({ open, venueId }) {
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
        <Booking venueId={venueId}/>
        {/* {show ?  : } */}
      </Modal>
    </div>
  );
}