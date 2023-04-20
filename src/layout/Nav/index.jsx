import { Link } from "react-router-dom";

import SearchIcon from "../../assets/interface/icons8-search-30.png";
import FilterIcon from "../../assets/interface/icons8-tune-50.png";
import BookingIcon from "../../assets/interface/icons8-booking-80.png";
import ExploreIcon from "../../assets/interface/icons8-compass-64.png";
import ProfileIcon from "../../assets/interface/icons8-male-user-64.png";
import ArrowIcon from "../../assets/interface/icons8-chevron-right.png";

import { categoryList } from "../../js/components/Categories/list";
import Categories from "../../js/components/Categories";

function Nav() {
  return (
    <>
      {/* Search */}
      <section className="flex w-3.5/7 items-center">
        <input className="pl-20 h-16.5 border rounded-full border-stone-grey w-full shadow-md" type="text" placeholder="Search venues" />
        <label className="absolute flex items-center justify-between pl-6 pr-6">
          <div>
            <img className="w-10" src={SearchIcon} alt="search" />
          </div>
        </label>
        <div className="absolute p-2 border rounded-full right-[12%] hover:shadow-inner hover:cursor-pointer md:hidden">
          <img className="w-9" src={FilterIcon} alt="filter" />
        </div>
        {/* Navbar */}
        <nav className="fixed inset-x-0 bottom-0 flex self-center justify-center p-4 bg-white border md:static md:w-2/4 md:p-0 md:border-none border-light-gray font-inder">
          <ul className="flex justify-between w-11/12 m-auto md:gap-4 md:justify-end x-sm:w-3/7 sm:w-3/5 md:w-full lg:gap-8">
            <li className="flex flex-col items-center min-w-[5rem] p-2 rounded-lg hover:cursor-pointer hover:shadow-inner">
              <img className="w-12" src={ExploreIcon} alt="explore img" />
              <Link to="home" className="text-base">
                Explore
              </Link>
            </li>
            <li className="flex flex-col items-center min-w-[5rem] p-2 rounded-lg hover:cursor-pointer hover:shadow-inner">
              <img className="w-12" src={BookingIcon} alt="bookings img" />
              <Link className="text-base">Bookings</Link>
            </li>
            <li className="flex flex-col items-center min-w-[5rem] p-2 rounded-lg hover:cursor-pointer hover:shadow-inner">
              <img className="w-12" src={ProfileIcon} alt="profile img" />
              <Link to="profile" className="text-base">
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      {/* Categories */}
      <section className="w-3.5/7 flex items-center gap-4">
        <Categories categories={categoryList} />
        <div className="hidden border rounded-full hover:shadow-inner hover:cursor-pointer md:block">
          <img className="w-12" src={ArrowIcon} alt="arrow right" />
        </div>
        <div className="hidden px-4 py-1 border rounded-full md:block hover:shadow-inner hover:cursor-pointer">
          <p>filter</p>
        </div>
      </section>
    </>
  );
}

export default Nav;
