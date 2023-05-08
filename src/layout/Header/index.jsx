import Nav from "../Nav";

import Logo from "../../assets/images/logo/icons8-floating-island-beach-100.png";

function Header() {
  return (
    <header className="fixed inset-x-0 z-50 flex flex-col items-center justify-center gap-2 py-6 bg-white shadow-3xl md:gap-4">
      <div className="hidden w-24">
        <img src={Logo} alt="logo" />
      </div>
      <Nav />
    </header>
  );
}

export default Header;
