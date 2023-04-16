import { Link } from "react-router-dom";

import SearchIcon from "../../assets/interface/icons8-search-30.png";
import FilterIcon from "../../assets/interface/icons8-tune-50.png";
import BookingIcon from "../../assets/interface/icons8-booking-80.png";
import ExploreIcon from "../../assets/interface/icons8-compass-64.png";
import ProfileIcon from "../../assets/interface/icons8-male-user-64.png";

import { categoryList } from "../../js/components/Categories/list";
import Categories from "../../js/components/Categories";

function Nav() {
  return (
    <>
    
    <section className="flex w-3.5/7 items-center">
        <input className="pl-20 h-16.5 border rounded-full border-stone-grey w-full shadow-md" type="text" placeholder="Search venues" />
        <label className="absolute flex justify-between w-3.5/7 pl-6 pr-6 items-center">
          <div>
            <img className="w-10" src={SearchIcon} alt="search" />
          </div>
          <div className="p-2 border rounded-full hover:shadow-inner hover:cursor-pointer">
            <img className="w-9" src={FilterIcon} alt="filter" />
          </div>
        </label>
      </section>

      <Categories categories={categoryList} />

      <nav className="fixed inset-x-0 bottom-0 flex self-center justify-center p-4 border border-stone-300 font-inder bg-stone-50">
        <ul className="flex justify-between w-11/12 m-auto">
          <li className="flex flex-col items-center min-w-[5rem] p-2 rounded-lg hover:cursor-pointer hover:shadow-inner">
            <img className="w-12" src={ExploreIcon} alt="explore img" />
            <Link to="home" className="text-base">Explore</Link>
          </li>
          <li className="flex flex-col items-center min-w-[5rem] p-2 rounded-lg hover:cursor-pointer hover:shadow-inner">
            <img className="w-12" src={BookingIcon} alt="bookings img" />
            <Link className="text-base">Bookings</Link>
          </li>
          <li className="flex flex-col items-center min-w-[5rem] p-2 rounded-lg hover:cursor-pointer hover:shadow-inner">
            <img className="w-12" src={ProfileIcon} alt="profile img" />
            <Link to="profile" className="text-base">Profile</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
