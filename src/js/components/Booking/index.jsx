import { useState } from "react";
import DatePicker, { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { closeBooking } from "../../hooks/bookingModal";

function Booking() {
  const dispatch = useDispatch();
  // const [startDate, setStartDate] = useState(null);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  // const [endDate, setEndDate] = useState(null);

  function FromDate({ className, children }) {
    return (
      <div style={{ color: "#fff" }}>
        <CalendarContainer className={className}>
          <div style={{ position: "relative" }}>{children}</div>
        </CalendarContainer>
      </div>
    );
  }

  return (
    <section className="w-[25rem] h-[40rem] m-2 p-2">
      <div>
        <button className="mb-2 hover:underscore" onClick={() => dispatch(closeBooking())}>
          close
        </button>
      </div>
      <h2>Booking</h2>
      <form className="flex flex-col gap-4">
        <DatePicker
          selectsRange={true}
          onChange={(update) => {
            setDateRange(update);
          }}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          disablePast="true"
          isClearable
          placeholderText="select a date"
          closeOnScroll={true}
          calendarContainer={FromDate}
          // withPortal
          showWeekNumbers
          fixedHeight
          showMonthDropdown
          className="px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder:text-black"
        />
        <label className="flex flex-col">
          guests
          <input className="p-2 border rounded-lg" type="number"/>
        </label>
        <div>
          <button className="flex-1 px-4 py-2 border rounded-lg bg-ocean hover:cursor-pointer">Book</button>
        </div>
      </form>
    </section>
  );
}

export default Booking;
