import PlaceholderImg from "../../assets/images/placeholder/item-placeholder.png";
import PlaceholderAvatar from "../../assets/images/placeholder/placeholder-profile.jpg"

export const handleItemImgError = (e) => {
  e.target.src = PlaceholderImg;
};

export const handleAvatarImgError = (e) => {
  e.target.src = PlaceholderAvatar;
}