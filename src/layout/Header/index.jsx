import Nav from "../Nav";

import Logo from "../../assets/images/logo/icons8-floating-island-beach-100.png";

function Header() {
  return (
    <header className="fixed inset-x-0 flex flex-col items-center justify-center gap-2 md:gap-4 py-6 bg-[#FDFDFD] border shadow-md">
      <div className="hidden w-24">
        <img src={Logo} alt="logo" />
      </div>
      <Nav />
    </header>
  );
}

export default Header;
