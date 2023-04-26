import ChevronRight from "../../../../assets/interface/icons8-chevron-right.png";
import PlaceholderAvatar from "../../../../assets/images/placeholder/placeholder-profile.jpg";
import { handleAvatarImgError } from "../../../helpers/placeholder";


function ProfileElements({ owner }) {
  console.log(owner);

  if(owner) {
    let avatar = owner.avatar;

    if(owner.avatar === null) {
      avatar = PlaceholderAvatar
    }
  
    return (
          <div className="flex items-center gap-4 p-4 rounded-lg shadow-3xl">
            <figure className="w-[5.5rem]">
              <img className="object-cover w-full h-full rounded-full" src={avatar} onError={handleAvatarImgError} alt="user avatar" />
            </figure>
            <div className="">
            <p className="font-bold">{owner.name}</p>
            <p>Show profile</p>
            </div>
            <div className="ml-auto">
              <img src={ChevronRight} alt="arrow" />
            </div>
          </div>
    );
  }

}

export default ProfileElements;
