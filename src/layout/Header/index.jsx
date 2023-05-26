import Nav from "../Nav";
import CompassLogo from "../../assets/interface/icons8-compass-64.png";

function Header() {
  return (
    <header className="fixed inset-x-0 z-50 flex flex-col items-center justify-center gap-2 py-6 bg-white shadow-3xl md:gap-4">
      <p class="flex items-center mb-4 sm:mb-0">
          <img src={CompassLogo} class="mr-4 h-12 w-12" alt="Compasso Logo" />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Compasso</span>
        </p>
      <Nav />
    </header>
  );
}

export default Header;
