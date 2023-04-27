import { useLocation } from "react-router-dom";

function LocationComponent({ location, id }) {
  const urlLocation = useLocation();

  if (urlLocation.pathname === `/venue/${id}`) {
    return (
      <p>
        Location: {location.address}, {location.city}, {location.country} {location.zip}
      </p>
    );
  }

  return (
    <>
      {location && (
          <p>{location.continent}</p>
      )}
    </>
  );
}

export default LocationComponent;
