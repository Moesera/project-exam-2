import { v4 as uuidv4 } from "uuid";
import { handleItemImgError } from "../../../helpers/placeholder.js"

function ShowcaseImage({ images, name }) {
    return (
      <div className="">
        <img className="object-cover shadow-lg aspect-3/2 rounded-xl" key={uuidv4()} src={images} onError={handleItemImgError} alt={name} />
      </div>
    );
}

export default ShowcaseImage;
