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
    return <div>Error: {isError}</div>;
  }

  if (data) {
    return (
      <main>
        <Helmet>
          <meta name="description" content={`Visit ${data.owner.name}'s venue ${data.name}`} />
          <title>{data.name} | Holidaze</title>
        </Helmet>
        <h1>{data.name}</h1>
        <Venue venueData={data} />
      </main>
    );
  }
}

export default Details;
