import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import { v4 as uuidv4 } from "uuid";
import PlaceholderImg from "../../../assets/images/placeholder/item-placeholder.png";

const handleImgError = (e) => {
  e.target.src = PlaceholderImg;
};

function SliderComponent({ images, name }) {

  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper shadow-3xl rounded-xl">
      {Array.isArray(images) && images.map((image) => {
        return (
          <SwiperSlide key={uuidv4()} className="">
            <img className="object-cover aspect-3/2 md:aspect-4/2 rounded-xl" src={image} onError={handleImgError} alt={name} />
          </SwiperSlide>
      );
      })}
    </Swiper>
  );
}

export default SliderComponent;
