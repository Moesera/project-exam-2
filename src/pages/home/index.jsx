import { useGet } from "../../js/hooks/service/get";
import { venues } from "../../js/helpers/constant";

import Venues from "../../js/components/Venues";

function Home() {
  const { data, isLoading, isError } = useGet(venues);
  return (
    <main className="pt-72 bg-[#FDFDFD] w-3.5/7 mx-auto xl:w-desktop mb-14">
      <h1 className="sr-only">Homepage</h1>
      <Venues data={data} isLoading={isLoading} isError={isError}/>
    </main>
  );
}

export default Home;
