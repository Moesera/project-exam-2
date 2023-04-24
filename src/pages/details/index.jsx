import { useParams } from "react-router-dom";
import { useGet } from "../../js/hooks/service/get";
import { venues } from "../../js/helpers/constant";

import Venue from "../../js/components/Venue";

function Details() {
  let { id } = useParams();
  const { data, isLoading, isError } = useGet(venues + id + "?_owner=true&_bookings=true");

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <main>
      <h1>{data.name}</h1>
      <Venue venueData={data} />
    </main>
  );
}

export default Details;
