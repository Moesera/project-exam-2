function LocationComponent({ location, id }) {
  console.log(location);
  return (
    <>
      {location && (
        <div>
          {Location.pathname === `/venue/${id}` ? (
            <p>{location.continent}</p>
          ) : (
            <p>
              {location.address}, {location.city}, {location.country} {location.zip}
            </p>
          )}
        </div>
      )}
    </>
  );
}

export default LocationComponent;
