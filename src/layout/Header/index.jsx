import Nav from "../Nav";

import Logo from "../../assets/images/logo/icons8-floating-island-beach-100.png";

function Header() {
  return (
    <header className="flex flex-col items-center justify-center py-8 border bg-pale-white">
      <div className="hidden w-24">
        <img src={Logo} alt="logo" />
      </div>
      <Nav />
    </header>
  );
}

export default Header;
