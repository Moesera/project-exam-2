import { useParams } from "react-router-dom";
import { useGet } from "../../js/hooks/service/get";
import { venues } from "../../js/helpers/constant";

import ImageCollage from "../../js/components/Venues/ImageCollage";
import StarIcon from "../../assets/interface/icons8-star-32.png";

function Details() {
  let { id } = useParams();
  const { data, isLoading, isError } = useGet(venues + id);

  console.log(data);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <main>
      <h1>Product Details</h1>
      <section className="my-60 w-3.5/7 mx-auto">
        <ImageCollage images={data.media} name={data.name} />
        <div className="flex items-center justify-between mt-2">
          <h2 className="font-semibold sm:truncate">{data.name}</h2>
          <span className="flex items-center gap-1">
            <figure className="w-7">
              <img src={StarIcon} alt="star" />
            </figure>
            <p>3.5</p>
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <p>location</p>
          <p className="mb-3">{data.updated}</p>
          <p>{data.description}</p>

          <div className="fixed inset-x-0 flex items-center justify-between p-6 border bottom-[7.5rem] border-light-gray bg-white">
            <div className="flex gap-4">
              <h3 className="font-semibold">{data.price} kr</h3>
              <p>night</p>
            </div>
            <form>
              <button className="px-4 py-2 font-medium text-white rounded-xl bg-ocean">Book venue</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Details;
