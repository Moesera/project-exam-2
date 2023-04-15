import { Link } from "react-router-dom";

import SearchIcon from "../../assets/interface/icons8-search-30.png";
import FilterIcon from "../../assets/interface/icons8-tune-50.png";
import BookingIcon from "../../assets/interface/icons8-booking-80.png";
import ExploreIcon from "../../assets/interface/icons8-compass-64.png";
import ProfileIcon from "../../assets/interface/icons8-male-user-64.png";

function Nav() {
  return (
    <>
      <section className="flex items-center justify-center w-5/7">
        <input className="h-16.5 px-16 border rounded-full border-stone-grey w-full" type="text" placeholder="Search venues" />
        <label className="absolute flex items-center justify-between pl-3.5 pr-3.5 w-5/7">
          <div>
            <img className="w-10" src={SearchIcon} alt="search" />
          </div>
          <div className="p-2 border rounded-full">
            <img className="w-9" src={FilterIcon} alt="filter" />
          </div>
        </label>
      </section>
      <nav className="flex self-center justify-center">
        <ul className="fixed inset-x-0 bottom-0 flex justify-between m-auto w-4/7 bg-slate-400">
          <li className="flex flex-col items-center">
            <img className="w-16" src={ExploreIcon} alt="explore img" />
            Explore
          </li>
          <li className="flex flex-col items-center">
            <img className="w-16" src={BookingIcon} alt="bookings img" />
            bookings
          </li>
          <li className="flex flex-col items-center">
            <img className="w-16" src={ProfileIcon} alt="profile img" />
            <Link>profile</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
