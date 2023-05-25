import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementOffset, resetOffset } from "../../js/hooks/search/offset";

import { useGet } from "../../js/hooks/service/get";
import { venues } from "../../js/helpers/constant";

import Venues from "../../js/components/Venues";

function Home() {
  const dispatch = useDispatch();
  const limit = 100;
  const offset = useSelector((state) => state?.offset);
  const { data, isLoading, isError } = useGet(venues, offset, limit);
  const [originalData, setOriginalData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchData, setSearchData] = useState([]);

  const searchInput = useSelector((state) => state.search?.searchInput);
  const filters = useSelector((state) => state.search?.filters);


  useEffect(() => {
    if (data) {
      setOriginalData(data);
    }
  }, [data]);

  useEffect(() => {
    if (Object.values(filters).some((value) => value)) {
      dispatch(incrementOffset(limit));
    } else {
      dispatch(resetOffset());
    }
  }, [filters, dispatch]);

  useEffect(() => {
    const filteredData = originalData.filter(
      (item) =>
        (!filters.wifi || (item.meta.hasOwnProperty("wifi") && item.meta.wifi)) &&
        (!filters.breakfast || (item.meta.hasOwnProperty("breakfast") && item.meta.breakfast)) &&
        (!filters.parking || (item.meta.hasOwnProperty("parking") && item.meta.parking)) &&
        (!filters.pets || (item.meta.hasOwnProperty("pets") && item.meta.pets)) &&
        (!filters.country || filters.country === "" || item.location.country === filters.country) &&
        (!filters.continent || filters.continent === "" || item.location.continent === filters.continent) &&
        (!filters.guests || filters.guests < 0 || item.maxGuests >= filters.guests)
    );

    if (!filters.wifi && !filters.breakfast && !filters.parking && !filters.pets && !filters.country && !filters.continent && !filters.guests) {
      setFilterData(originalData);
    }

    setFilterData(filteredData);
  }, [filters, originalData]);

  useEffect(() => {
    const searchData = filterData.filter(
      (item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.description.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.location.continent.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.location.city.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.location.country.toLowerCase().includes(searchInput.toLowerCase())
    );

    setSearchData(searchData);
  }, [originalData, searchInput, filterData]);

  return (
    <main className="pt-40 bg-[#FDFDFD] w-3.5/7 mx-auto xl:w-desktop mb-14">
      <h1 className="sr-only">Homepage</h1>
      <Venues data={searchData} isLoading={isLoading} isError={isError} />
    </main>
  );
}

export default Home;
