import SliderComponent from "../Slider";
import LocationComponent from "../Location";
import CardComponent from "../Card";

import StarIcon from "../../../assets/interface/icons8-star-32.png";

function Venue({ venueData }) {

  return (
    <>
      <section className="my-60 w-3.5/7 mx-auto xl:w-desktop text-xl md-sm:text-2xl">
        <SliderComponent images={venueData.media} name={venueData.name} />
        <div className="flex items-center justify-between mt-2">
          <h2 className="mb-2 font-semibold sm:truncate">{venueData.name}</h2>
          <span className="flex items-center gap-1">
            <figure className="w-7">
              <img src={StarIcon} alt="star" />
            </figure>
            <p>3.5</p>
          </span>
        </div>

        <div className="flex flex-col gap-2">
        <LocationComponent location={venueData.location} id={venueData.id}/>
          <p className="mb-2">Date: {venueData.updated}</p>
          <p>{venueData.description}</p>

          <section className="fixed inset-x-0 p-6 border bottom-[7.5rem] border-light-gray bg-white z-50 md:bottom-0">
            <div className="flex items-center justify-between mx-auto w-4/7 xl:w-desktop">
              <div className="flex flex-wrap gap-4">
                <h3 className="font-semibold">{venueData.price} kr</h3>
                <p>night</p>
              </div>
              <form>
                <button className="px-4 py-2 font-medium text-white rounded-xl bg-ocean">Book venue</button>
              </form>
            </div>
          </section>
          
          <section className="w-full mt-20">
            <CardComponent elements={venueData.owner}/>
          </section>
        </div>
      </section>
    </>
  );
}

export default Venue;
