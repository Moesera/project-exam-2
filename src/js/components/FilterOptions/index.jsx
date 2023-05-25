import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../hooks/modal";
import { setFilters } from "../../hooks/search/search";

import WifiIcon from "../../../assets/interface/meta/icons8-wifi-64.png";
import BreakfastIcon from "../../../assets/interface/meta/icons8-breakfast-64.png";
import ParkingIcon from "../../../assets/interface/meta/icons8-parking-64.png";
import PetsIcon from "../../../assets/interface/meta/icons8-pets-64.png";

export default function FilterOptions() {
  const filters = useSelector((state) => state.search?.filters);

  function checkValue(e) {
    const checkbox = e.target;
    const label = checkbox.parentElement;
    const img = label.querySelector("img");
    
    if(checkbox.checked) {
      img.className = "w-24 p-2 border rounded-lg hover:cursor-pointer";
    } else {
      img.className = "w-24 p-2 border border-white rounded-lg hover:cursor-pointer";
    }
  }

  function setFiltering() {

    const wifi = document.getElementById("wifi").checked;
    const breakfast = document.getElementById("breakfast").checked;
    const parking = document.getElementById("parking").checked;
    const pets = document.getElementById("pets").checked;
    const country = document.querySelector("#country option:checked").value;
    const continent = document.querySelector("#continent option:checked").value;
    let guests = document.querySelector("#guests").value;

    if(guests === "0") {
      guests = "";
    }

    dispatch(
      setFilters({
        wifi,
        breakfast,
        parking,
        pets,
        country,
        continent,
        guests,
      })
    );
  }

  const dispatch = useDispatch();
  return (
    <div className="w-[95%] mx-auto mb-2">
      <div className="flex justify-end">
      <button className="px-2 mt-2 mb-2 font-medium border rounded-lg md-sm:mt-4 hover:opacity-90 bg-error" onClick={() => dispatch(closeModal())}>
        X
      </button>
      </div>
      <h2>Facilities</h2>
      <section className="flex gap-4">
        <label>
          <input onClick={checkValue} className={`hidden`} id="wifi" name="wifi" type="checkbox" defaultChecked={filters.wifi}/>
          <img className={`${filters.wifi ? 'w-24 p-2 border rounded-lg hover:cursor-pointer' : 'w-24 p-2 border border-white rounded-lg hover:cursor-pointer'}`} src={WifiIcon} alt="wifi" />
        </label>
        <label>
          <input onClick={checkValue} className={`hidden`} id="breakfast" name="breakfast" type="checkbox" defaultChecked={filters.breakfast}/>
          <img className={`${filters.breakfast ? 'w-24 p-2 border rounded-lg hover:cursor-pointer' : 'w-24 p-2 border border-white rounded-lg hover:cursor-pointer'}`} src={BreakfastIcon} alt="breakfast" />
        </label>
        <label>
          <input onClick={checkValue} className={`hidden`} id="parking" name="parking" type="checkbox" defaultChecked={filters.parking} />
          <img className={`${filters.parking ? 'w-24 p-2 border rounded-lg hover:cursor-pointer' : 'w-24 p-2 border border-white rounded-lg hover:cursor-pointer'}`} src={ParkingIcon} alt="parking" />
        </label>
        <label>
          <input onClick={checkValue} className={`hidden`} id="pets" name="pets" type="checkbox" defaultChecked={filters.pets}/>
          <img className={`${filters.pets ? 'w-24 p-2 border rounded-lg hover:cursor-pointer' : 'w-24 p-2 border border-white rounded-lg hover:cursor-pointer'}`} src={PetsIcon} alt="pets" />
        </label>
      </section>
      <section className="flex flex-col gap-3">
        <label className="">
        <h2 className="mt-4">Country</h2>
          <select id="country" className="w-full p-1 border rounded-lg" defaultValue={filters.country}>
            <option value=""></option>
            <option value="Norway">Norway</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="Brazil">Brazil</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="Japan">Japan</option>
            <option value="China">China</option>
            <option value="Australia">Australia</option>
            <option value="South Africa">South Africa</option>
            <option value="India">India</option>
          </select>
        </label>
        <label>
        <h2>Continent</h2>
          <select id="continent" className="w-full p-1 border rounded-lg" defaultValue={filters.continent}>
          <option value=""></option>
            <option value="Europe">Europe</option>
            <option value="South America">South America</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Antarctica">Antarctica</option>
            <option value="North America">North America</option>
            <option value="Australia">Australia</option>
          </select>
        </label>
        <label>
          <h2>Guests</h2>
          <input id="guests" className="w-full border rounded-lg" type="number" min="0" placeholder="0" inputMode="numeric" defaultValue={filters.guests}/>
        </label>
        <button onClick={setFiltering} type="button" className="p-2 border rounded-lg bg-success">Filter</button>
      </section>
    </div>
  );
}
