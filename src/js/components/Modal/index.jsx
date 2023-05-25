import Modal from "react-responsive-modal";
import { useDispatch } from "react-redux";
import { closeModal } from "../../hooks/modal";

export default function ModalPopup({open, searchInput, content }) {
  const dispatch = useDispatch();
  const Component = content;

  return (
    <div>
      <Modal
        classNames={{
          overlay: "fixed inset-0 w-full h-full bg-white bg-opacity-50 z-50",
          modal: "absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] bg-white border z-50 rounded-2xl w-[90%] h-[70%] sm:w-[50rem] overflow-y-auto",
        }}
        open={open}
        onClose={() => dispatch(closeModal())}
        showCloseIcon={false}
        center
      >
        <Component searchInput={searchInput} />
      </Modal>
    </div>
  );
}