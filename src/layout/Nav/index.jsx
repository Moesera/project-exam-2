import { Link } from "react-router-dom";

import SearchIcon from "../../assets/interface/icons8-search-30.png";
import FilterIcon from "../../assets/interface/icons8-tune-50.png";

function Nav() {
  return (
    <>
      <container className="flex items-center justify-center w-5/7">
        <input className="h-16.5 px-16 border rounded-full border-stone-grey w-full" type="text" placeholder="Search venues" />
        <label className="absolute flex items-center justify-between pl-1 pr-1 w-5/7">
          <div>
            <img className="w-10" src={SearchIcon} alt="search" />
          </div>
          <div className="p-2 border rounded-full">
            <img className="w-9" src={FilterIcon} alt="filter" />
          </div>
        </label>
      </container>
      <nav className="flex self-center justify-center">
        <ul className="fixed inset-x-0 bottom-0 bg-slate-400">
          <li>
            <img src="#" alt="bookings img" />
            bookings
          </li>
          <li>
            <img src="#" alt="profile img" />
            <Link>profile</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
