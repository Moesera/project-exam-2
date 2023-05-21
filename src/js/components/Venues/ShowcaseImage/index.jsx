import { v4 as uuidv4 } from "uuid";
import PlaceholderImage from "../../../../assets/images/placeholder/item-placeholder.png";
import { handleItemImgError } from "../../../helpers/placeholder.js";

function ShowcaseImage({ images, name }) {

  if (images === undefined) {
    images = PlaceholderImage;
  }

  return (
    <div className="">
      <img className="object-cover shadow-3xl aspect-3/2 rounded-xl" key={uuidv4()} src={images} onError={handleItemImgError} alt={name} />
    </div>
  );
}

export default ShowcaseImage;
