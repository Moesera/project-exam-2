import { Link } from "react-router-dom";
import { convertDate } from "../../helpers/convertDate";

import StarIcon from "../../../assets/interface/icons8-star-32.png";

import ShowcaseImage from "./ShowcaseImage";
import LocationComponent from "../Location";

function Venues({ data, isLoading, isError }) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen p-5 bg-gray-100 min-w-screen">
      <div className="flex space-x-2 animate-pulse">
        <div className="w-3 h-3 rounded-full bg-ocean"></div>
        <div className="w-3 h-3 rounded-full bg-ocean"></div>
        <div className="w-3 h-3 rounded-full bg-ocean"></div>
      </div>
    </div>
    );
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <section className="grid grid-cols-1 grid-rows-1 gap-8 my-8 auto-rows-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((venue) => {
        return (
          <Link to={`/venue/${venue.id}`} key={venue.id} className="p-4 hover:bg-stone-200 rounded-xl hover:shadow-3xl">
            <ShowcaseImage images={venue.media[0]} name={venue.name} />
            <div className="flex items-center justify-between mt-2">
              <h2 className="font-semibold sm:truncate">{venue.name}</h2>
              <span className="flex items-center gap-1">
                <figure className="w-7">
                  <img src={StarIcon} alt="star" />
                </figure>
                <p>3.5</p>
              </span>
            </div>

            <div className="flex flex-col gap-1">
              {venue.location.continent ? <LocationComponent location={venue.location} /> : <p>Europe</p>}
              <p className="flex-grow">{convertDate(venue.updated)}</p>
              <div className="flex gap-4 mt-auto ">
                <h3 className="font-semibold">{venue.price} kr</h3>
                <p>night</p>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
}

export default Venues;
