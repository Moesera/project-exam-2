import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeLoginModal, openLoginModal } from "../../js/hooks/loginModal";
import { setSearchInput } from "../../js/hooks/search/search";
import { openModal } from "../../js/hooks/modal";
import { incrementOffset, decrementOffset, resetOffset } from "../../js/hooks/search/offset";

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
  const offset = useSelector((state) => state.offset);
  const isLoginModalOpen = useSelector((state) => state.loginModal?.isOpen);
  const isModalOpen = useSelector((state) => state.modal?.isOpen);
  const isLoggedIn = useSelector((state) => state.userAuth?.isLoggedIn);
  const searchInput = useSelector((state) => state.search.searchInput);
  const dispatch = useDispatch();

  const components = [LoginForm, RegisterForm];
  const [showLogin, setShowLogin] = useState(true);

  /**
   * This is the search function that launches on change to filter data.
   * @param {object} e contains the event of the action
   * @returns sets a search query to the search redux.
   */
  function handleSearch(e) {
    const input = e.target.value;
    dispatch(setSearchInput(input));

    if (input.length > searchInput.length) {
      if (offset === 250) {
        resetOffset();
      } else {
        dispatch(incrementOffset(20));
      }
    } else if (input.length < searchInput.length) {
      if (offset === 0) {
        return;
      } else {
        dispatch(decrementOffset(20));
      }
    } else if (input.length > 0) {
      resetOffset();
    }
  }

  let user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      {isModalOpen && <ModalPopup open={isModalOpen} searchInput={searchInput} content={FilterOptions} />}
      {isLoginModalOpen && <LoginModal show={showLogin} setShow={setShowLogin} components={components} open={isLoginModalOpen} />}
      {/* Search */}
      <section className="flex w-3.5/7 items-center xl:w-desktop">
        <label className="w-full">
          <input defaultValue={searchInput} onKeyUp={handleSearch} className="pl-20 h-16.5 rounded-full bg-white w-full shadow-3xl" type="text" placeholder="Search venues" />
        </label>
        <label className="absolute flex items-center justify-between pl-6 pr-6">
          <Link to="/">
            <img className="w-10" src={SearchIcon} alt="search" />
          </Link>
        </label>
        <div onClick={() => dispatch(openModal())} className="relative flex items-center">
          <figure className="absolute p-2 border rounded-full w-14 right-4 hover:shadow-inner hover:cursor-pointer">
          <img src={FilterIcon} alt="filter" />
        </figure>
        </div>
        {/* Navbar */}
        <nav className="fixed inset-x-0 bottom-0 flex self-center justify-center p-4 bg-white border md:static md:w-2/4 md:p-0 md:border-none md:ml-1 border-light-gray font-inder">
          <ul className="flex justify-between w-11/12 m-auto md:gap-4 md:justify-end x-sm:w-3/7 sm:w-3/5 md:w-full lg:gap-8">
            <li className="min-w-[5rem] p-2 hover:cursor-pointer border-b-4 hover:border-gray border-white">
              <Link onClick={() => dispatch(closeLoginModal())} to="/" className="flex flex-col items-center text-base">
                <img className="w-12" src={ExploreIcon} alt="explore img" />
                Explore
              </Link>
            </li>
            {isLoggedIn ? (
              <li className="min-w-[5rem] p-2 hover:cursor-pointer border-b-4 hover:border-gray border-white">
                <Link onClick={() => dispatch(closeLoginModal())} to={`/profile/${user.name}`} className="flex flex-col items-center text-base">
                  <img className="w-12" src={BookingIcon} alt="bookings img" />
                  Bookings
                </Link>
              </li>
            ) : (
              <li className="min-w-[5rem] p-2 hover:cursor-pointer border-b-4 hover:border-gray border-white">
                <Link onClick={() => dispatch(openLoginModal())} className="flex flex-col items-center text-base">
                  <img className="w-12" src={BookingIcon} alt="bookings img" />
                  Bookings
                </Link>
              </li>
            )}
            <ProfileButton user={user} isLoggedIn={isLoggedIn} />
          </ul>
        </nav>
      </section>
    </>
  );
}

export default Nav;
