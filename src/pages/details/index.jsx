import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useGet } from "../../js/hooks/service/get";
import { venues } from "../../js/helpers/constant";

import Venue from "../../js/components/Venue";

function Details() {
  let { id } = useParams();
  const { data, isLoading, isError } = useGet(venues + id + "?_owner=true&_bookings=true");

  if (isLoading) {
    return (
      <div class="flex items-center justify-center min-h-screen p-5 bg-gray-100 min-w-screen">
        <div class="flex space-x-2 animate-pulse">
          <div class="w-3 h-3 bg-ocean rounded-full"></div>
          <div class="w-3 h-3 bg-ocean rounded-full"></div>
          <div class="w-3 h-3 bg-ocean rounded-full"></div>
        </div>
      </div>
    );
  }

  if (isError) {
    return <div>Error: {isError}</div>;
  }

  if (data) {
    return (
      <main>
        <Helmet>
          <title>{data.name} | Holidaze</title>
          <meta name="description" content={`Visit ${data.owner.name}'s venue ${data.name}`} />
        </Helmet>
        <h1>{data.name}</h1>
        <Venue venueData={data} />
      </main>
    );
  }
}

export default Details;
