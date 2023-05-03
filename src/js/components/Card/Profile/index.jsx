import { Link } from "react-router-dom";

import ChevronRight from "../../../../assets/interface/icons8-chevron-right.png";
import PlaceholderAvatar from "../../../../assets/images/placeholder/placeholder-profile.jpg";
import { handleAvatarImgError } from "../../../helpers/placeholder";


function ProfileCard({ owner }) {
  if (owner) {
    let avatar = owner.avatar;

    if (owner.avatar === null) {
      avatar = PlaceholderAvatar;
    }

    return (
      <Link to={`/profile/${owner.name}`} className="flex items-center gap-4 px-4 py-6 rounded-lg shadow-3xl group/item">
        <figure className="w-[4.5rem] h-[4.5rem] md-sm:w-[6rem] md-sm:h-[6rem]">
          <img className="object-cover w-full h-full rounded-full shadow-3xl" src={avatar} onError={handleAvatarImgError} alt="user avatar" />
        </figure>
        <div className="text-lg md-sm:text-2xl">
          <p className="font-bold">{owner.name}</p>
          <p className="group-hover/item:underline">Show profile</p>
        </div>
        <div className="ml-auto w-[2.5rem] md-sm:w-14 invisible group-hover/item:visible">
          <img src={ChevronRight} alt="arrow" />
        </div>
      </Link>
    );
  }
}

export default ProfileCard;
