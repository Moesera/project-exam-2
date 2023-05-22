import Modal from "react-responsive-modal";
import { useDispatch } from "react-redux";
import { closeFiltering } from "../../hooks/filterModal";

import FilterOptions from "./FilterOptions";

export default function FilterModal({open, searchInput }) {
  const dispatch = useDispatch();

  return (
    <div>
      <Modal
        classNames={{
          overlay: "fixed inset-0 w-full h-full bg-white bg-opacity-50 z-50",
          modal: "absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] bg-white border z-50 rounded-2xl w-[90%] h-[50%]",
        }}
        open={open}
        onClose={() => dispatch(closeFiltering())}
        showCloseIcon={false}
        center
      >
        <FilterOptions searchInput={searchInput} />
      </Modal>
    </div>
  );
}