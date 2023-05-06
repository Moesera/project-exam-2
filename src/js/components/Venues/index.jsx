import { Link } from "react-router-dom";

import StarIcon from "../../../assets/interface/icons8-star-32.png";

import ShowcaseImage from "./ShowcaseImage";
import LocationComponent from "../Location";

function Venues({data, isLoading, isError}) {


  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

    return (
      <section className="grid grid-rows-1 gap-8 my-8 auto-rows-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((venue) => {
          return (
            <Link to={`/venue/${venue.id}`} key={venue.id} className="p-4 hover:bg-stone-200 rounded-xl hover:shadow-3xl">
              <ShowcaseImage images={venue.media[0]} name={venue.name} />
                <div className="flex items-center justify-between mt-2">
                  <h2 className="font-semibold sm:truncate">{venue.name}</h2>
                  <span className="flex items-center gap-1">
                    <figure className="w-7">
                    <img  src={StarIcon} alt="star" />
                    </figure>
                    <p>3.5</p>
                  </span>
                </div>
  
                <div className="flex flex-col gap-1">
                <LocationComponent location={venue.location} />
                <p className="flex-grow">{venue.updated}</p>
                <div className="flex gap-4">
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
