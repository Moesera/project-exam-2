import Modal from "react-responsive-modal";
import { useDispatch } from 'react-redux';
import { closeModal } from '../../hooks/modal';

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
export default function PopupModal({ show, setShow, components, setComponents, open }) {
  const dispatch = useDispatch();
  // I need to set these values to header to pass it down to PopupModal (DONE)
  const LoginForm = components[0];
  const RegisterForm = components[1];
  
  return (
    <div>
      {/* This should stay in the popupModal component */}
      <Modal classNames={{
      overlay: "fixed inset-0 bottom-[7.6rem] bg-white bg-opacity-50", 
      modal: "fixed bg-white inset-0 bottom-[7.6rem] w-full z-50"}}
      open={open} onClose={() => dispatch(closeModal())} showCloseIcon={false} center>
        {show ? <LoginForm setShow={setShow} /> : <RegisterForm setShow={setShow} />}
      </Modal>
    </div>
  );
}
