import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="flex">
      <container>
        <input type="search" placeholder="Search venues" />
        <label></label>
      </container>
      <ul className="flex">
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
  );
}

export default Nav;
