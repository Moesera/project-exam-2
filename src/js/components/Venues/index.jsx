import { useGet } from "../../hooks/service/get";
import { venues } from "../../helpers/constant";

import ImageCollage from "./ImageCollage/index.jsx";

function Venues() {
  const { data, isLoading, isError } = useGet(venues);
  console.log(data);
  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div>
      {data.map((venue) => {
        return (
          <div key={venue.id}>
            <ImageCollage images={venue.media} name={venue.name} />
            <div>
              <span>
                <h2>{venue.name}</h2>
                <p>stars: 3.5</p>
              </span>
              <p>location</p>
                <p>{venue.updated}</p>
                <div>
                <h3>{venue.price} kr</h3>
                <p>night</p>
                </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Venues;
