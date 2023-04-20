import PlaceholderImg from "../../../../assets/images/placeholder/item-placeholder.png";
import { v4 as uuidv4 } from "uuid";

const handleImgError = (e) => {
  e.target.src = PlaceholderImg;
};

function ImageCollage({ images, name }) {
    return (
      <div className="">
        <img className="object-cover shadow-lg aspect-3/2 rounded-xl" key={uuidv4()} src={images} onError={handleImgError} alt={name} />
      </div>
    );
}

export default ImageCollage;
