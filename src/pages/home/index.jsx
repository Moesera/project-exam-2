import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredData } from "../../js/hooks/search/search";

import { useGet } from "../../js/hooks/service/get";
import { venues } from "../../js/helpers/constant";

import Venues from "../../js/components/Venues";

function Home() {
  const { data, isLoading, isError } = useGet(venues);
  const dispatch = useDispatch();
  const searchInput = useSelector((state) => state.search?.searchInput);
  const filteredData = useSelector((state) => state.search.filteredData);

  useEffect(() => {
    const filteredData = data.filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase()));
    dispatch(setFilteredData(filteredData));
  }, [data, searchInput, dispatch]);

  return (
    <main className="pt-72 bg-[#FDFDFD] w-3.5/7 mx-auto xl:w-desktop mb-14">
      <h1 className="sr-only">Homepage</h1>
      <Venues data={filteredData} isLoading={isLoading} isError={isError} />
    </main>
  );
}

export default Home;
