import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
// import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../hooks/modal";
import { useApi } from "../../../hooks/service/api";

import AvatarPlaceholder from "../../../../assets/images/placeholder/placeholder-profile.jpg";
import AddIcon from "../../../../assets/interface/icons8-add-50.png";
import CancelIcon from "../../../../assets/interface/icons8-cancel-50.png";
import NewAvatar from "../../Register/NewAvatar";

import { profile } from "../../../helpers/constant";

export default function EditProfile() {
  const dispatch = useDispatch();
  const { name } = useParams();
  const { apiData, isSuccess, isLoading, isError } = useApi(profile + name + "/media")
  const { handleSubmit} = useForm();

  const [count, setCount] = useState(0);
  const [chosenAvatar, setChosenAvatar] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [imageUrl, setImageUrl] = useState("");
  const [avatars, setAvatars] = useState([]);
  const avatarContainerRef = useRef(null);



  function onSubmit() {
    const data = {avatar: chosenAvatar}
    const method = "PUT";

    // // notify();
    apiData(data, method);
  }

  function increment({ setCount, count }) {
    setCount(count + 1);
  }

  function setHidden() {
    setIsHidden(!isHidden);
  }

  function addImage() {
    // This is the new avatar image from the url input
    const newAvatar = imageUrl;
    increment({ setCount, count });
    //  Setting the new avatar into the avatar array
    setAvatars([...avatars, newAvatar]);

    setImageUrl("");
  }

  function handleAvatarChange() {
    const avatarRadioButtons = avatarContainerRef.current.querySelectorAll(`input[type="radio"][name="avatar"]`);
    let chosenAvatarValue;
    avatarRadioButtons.forEach((radioButton) => {
      if (radioButton.checked) {
        chosenAvatarValue = radioButton.value;
      }
    });
    setChosenAvatar(chosenAvatarValue);
  }

  if(isLoading) {
    return (
      <div class="flex items-center justify-center p-5 bg-gray-100">
      <div class="flex space-x-2 animate-pulse">
        <div class="w-3 h-3 bg-ocean rounded-full"></div>
        <div class="w-3 h-3 bg-ocean rounded-full"></div>
        <div class="w-3 h-3 bg-ocean rounded-full"></div>
      </div>
    </div>
    )
  }

  return (
    <section className="w-[95%] mx-auto mt-4">
      <button type="button" className="px-2 mt-2 mb-2 font-medium border rounded-lg hover:opacity-90 bg-error" onClick={() => dispatch(closeModal())}>
        X
      </button>
      <h1 className="w-11/12 mt-10 mb-12 text-4xl font-medium">Edit your profile</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col font-inder">
          Avatar
          <div id="avatarContainer" ref={avatarContainerRef} className="flex gap-4" onChange={handleAvatarChange}>
            <label>
              <input className="hidden" type="radio" id="preset" name="avatar" value={AvatarPlaceholder} />
              <figure className="w-20 h-20 p-2 rounded-lg shadow-3xl hover:cursor-pointer hover:border hover:border-gray">
                <img className="object-cover w-full h-full" src={AvatarPlaceholder} alt="placeholder" pattern="^(https?|ftp):\/\/(-\.)?([^\s/?\.#-]+\.?)+(\/[^\s]*)?$" required/>
              </figure>
            </label>
            <NewAvatar avatars={avatars} setAvatars={setAvatars} count={count} setCount={setCount} />
            {/*  */}
            {/* Add image button */}
            <button onClick={setHidden} id="addAvatar" type="button" className={`w-20 p-2 rounded-lg shadow-3xl hover:border hover:border-gray transition-opacity duration-300`}>
              <img className="object-cover w-full h-full transition-opacity duration-300" src={isHidden ? AddIcon : CancelIcon} alt="add" />
            </button>
            {/* End of image button */}
          </div>
          <label className="flex gap-4 mt-2">
            <input
              id="imageUrl"
              className={`w-full p-2 border rounded-lg transition-opacity duration-300 ${
                isHidden ? "invisible" : "visible"
              }`}
              type="url"
              placeholder="enter your jpg url"
              value={imageUrl}
              onChange={(event) => setImageUrl(event.target.value)}
              pattern="^(https?|ftp):\/\/(-\.)?([^\s/?\.#-]+\.?)+(\/[^\s]*)?$"
            />
            <button
              type="button"
              onClick={addImage}
              className={`shadow-3xl py-2 px-4 rounded-lg font-bold border border-white hover:cursor-pointer hover:border hover:border-gray ${
                isHidden ? "invisible" : "visible"
              }`}
            >
              +
            </button>
          </label>
        </div>
        <button className="p-2 mt-2 border rounded-lg bg-success" type="submit">
          Submit
        </button>
        {isError && <p className="error">Error: {isError}</p>}
        {isSuccess && <div className="success">Venue was successfully updated</div>}
      </form>
    </section>
  );
}
