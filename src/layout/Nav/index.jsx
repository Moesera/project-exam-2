import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeLoginModal } from "../../js/hooks/loginModal";
import { setSearchInput } from "../../js/hooks/search/search";
import { openModal } from "../../js/hooks/modal";

// images
import SearchIcon from "../../assets/interface/icons8-search-30.png";
import FilterIcon from "../../assets/interface/icons8-tune-50.png";
import BookingIcon from "../../assets/interface/icons8-booking-80.png";
import ExploreIcon from "../../assets/interface/icons8-compass-64.png";

import LoginModal from "../../js/components/Login/Modal/index";
import RegisterForm from "../../js/components/Register";
import LoginForm from "../../js/components/Login";
import ProfileButton from "../../js/components/ProfileButton";
import ModalPopup from "../../js/components/Modal";
import FilterOptions from "../../js/components/FilterOptions";

function Nav() {
  const isLoginModalOpen = useSelector((state) => state.loginModal?.isOpen);
  const isModalOpen = useSelector((state) => state.modal?.isOpen);
  const isLoggedIn = useSelector((state) => state.userAuth?.isLoggedIn);
  const searchInput = useSelector((state) => state.search.searchInput);
  const dispatch = useDispatch();

  const components = [LoginForm, RegisterForm];
  const [showLogin, setShowLogin] = useState(true);

  function handleSearch(e) {
    const input = e.target.value;
    dispatch(setSearchInput(input));
  }

  return (
    <>
      {isModalOpen && <ModalPopup open={isModalOpen} searchInput={searchInput} content={FilterOptions} />}
      {isLoginModalOpen && <LoginModal show={showLogin} setShow={setShowLogin} components={components} open={isLoginModalOpen} />}
      {/* Search */}
      <section className="flex w-3.5/7 items-center xl:w-desktop gap-3">
        <input defaultValue={searchInput} onKeyUp={handleSearch} className="pl-20 h-16.5 rounded-full bg-white w-full shadow-3xl" type="text" placeholder="Search venues" />
        <label className="absolute flex items-center justify-between pl-6 pr-6">
          <Link to="/">
            <img className="w-10" src={SearchIcon} alt="search" />
          </Link>
        </label>
        <div onClick={() => dispatch(openModal())} className="absolute p-2 border rounded-full right-[12%] hover:shadow-inner hover:cursor-pointer md:right-[38%] xl:static">
          <img className="w-9 xl:w-14" src={FilterIcon} alt="filter" />
        </div>
        {/* Navbar */}
        <nav className="fixed inset-x-0 bottom-0 flex self-center justify-center p-4 bg-white border md:static md:w-2/4 md:p-0 md:border-none border-light-gray font-inder">
          <ul className="flex justify-between w-11/12 m-auto md:gap-4 md:justify-end x-sm:w-3/7 sm:w-3/5 md:w-full lg:gap-8">
            <li className="min-w-[5rem] p-2 hover:cursor-pointer border-b-4 hover:border-gray border-white">
              <Link onClick={() => dispatch(closeLoginModal())} to="/" className="flex flex-col items-center text-base">
                <img className="w-12" src={ExploreIcon} alt="explore img" />
                Explore
              </Link>
            </li>
            <li className="min-w-[5rem] p-2 hover:cursor-pointer border-b-4 hover:border-gray border-white">
              <Link onClick={() => dispatch(closeLoginModal())} className="flex flex-col items-center text-base">
                <img className="w-12" src={BookingIcon} alt="bookings img" />
                Bookings
              </Link>
            </li>
            <ProfileButton setShow={setShowLogin} isLoggedIn={isLoggedIn} />
          </ul>
        </nav>
      </section>
    </>
  );
}

export default Nav;
