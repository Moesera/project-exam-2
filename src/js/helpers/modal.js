export function openModal({ setOpen }) {
  setOpen(true);
}

export function closeModal({ setOpen, setShow }) {
  setOpen(false);
  setShow(true);
}
