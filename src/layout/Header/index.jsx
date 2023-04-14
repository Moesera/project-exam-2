import Nav from "../Nav";

import Logo from "../../assets/images/logo/icons8-floating-island-beach-100.png";

function Header() {
  return (
    <header className="flex justify-center h-40 border bg-pale-white">
      <div className="hidden w-24">
        <img src={Logo} alt="logo" />
      </div>
      <Nav />
    </header>
  );
}

export default Header;
