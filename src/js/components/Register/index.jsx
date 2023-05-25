import React, { useState, useRef, useEffect, useCallback } from "react";
import useRegister from "./../../hooks/service/register";
import NewAvatar from "./NewAvatar";

import { register } from "../../helpers/constant";

import AvatarPlaceholder from "../../../assets/images/placeholder/placeholder-profile.jpg";
import AddIcon from "../../../assets/interface/icons8-add-50.png";
import CancelIcon from "../../../assets/interface/icons8-cancel-50.png";
import ManagerIcon from "../../../assets/interface/icons8-manager-100.png";
import CustomerIcon from "../../../assets/interface/icons8-budget-100.png";

function increment({ setCount, count }) {
  setCount(count + 1);
}

const url = register;

function RegisterForm({ setShow }) {

  const [count, setCount] = useState(0);
  const avatarContainerRef = useRef(null);
  const [isHidden, setIsHidden] = useState(true);
  const [imageUrl, setImageUrl] = useState("");
  const { register, isSuccess, isLoading, isError } = useRegister(url);

  const [avatars, setAvatars] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [isManager, setIsManager] = useState(false);
  const [chosenAvatar, setChosenAvatar] = useState(false);
  const [password, setPassword] = useState("");

  const resetForm = useCallback(() => {
    setAvatars("");
    setUsername("");
    setEmail("");
    setIsManager("");
    setChosenAvatar("");
    setPassword("");

    setTimeout(() => {
      setShow(true);
    }, 3000);
  }, [setShow]);

  useEffect(() => {
    if (isSuccess) {
      resetForm();
    }
  }, [isSuccess, resetForm]);

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

  function setHidden() {
    setIsHidden(!isHidden);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const managerRadio = form.elements["manager"];
    setIsManager(managerRadio.checked);
    const options = {
      name: username,
      email: email,
      password: password,
      avatar: chosenAvatar,
      venueManager: isManager,
    };
    register(options);
  }

  return (
    <div className="flex flex-col justify-center min-h-full my-5">
      <div className="mx-auto w-4/7 md:w-[60rem]">
        <p onClick={() => setShow(true)} className="mb-4 cursor-pointer">
          Back
        </p>
      </div>
      <h2 className="w-11/12 mx-auto mb-12 text-4xl font-medium text-center">create your account</h2>
      {/* Form start */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 mx-auto bg-white w-4/7 md:w-[60rem]">
        <label className="flex flex-col font-inder">
          Username
          <input
            className="p-2 border rounded-lg"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            minLength={4}
            autoComplete="username"
            required
          />
        </label>
        <label className="flex flex-col font-inder">
          Email
          <input className="p-2 border rounded-lg" type="email" value={email} onChange={(event) => setEmail(event.target.value)} pattern="^[\w\-.]+@(stud.)?noroff.no$" required />
        </label>
        <label className="flex flex-col font-inder">
          Password
          <input
            className="p-2 border rounded-lg"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            minLength={8}
            autoComplete="current-password"
            required
          />
        </label>
        {/* Avatar */}
        <div className="flex flex-col font-inder">
          Avatar
          <div id="avatarContainer" ref={avatarContainerRef} className="flex gap-4" onChange={handleAvatarChange}>
            <label>
              <input className="hidden" type="radio" id="preset" name="avatar" value={AvatarPlaceholder} />
              <figure className="w-20 h-20 p-2 rounded-lg shadow-3xl hover:cursor-pointer hover:border hover:border-gray">
                <img className="object-cover w-full h-full" src={AvatarPlaceholder} alt="placeholder" pattern="^(https?|ftp):\/\/(-\.)?([^\s/?\.#-]+\.?)+(\/[^\s]*)?$" />
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
              className={`w-full p-2 border rounded-lg transition-opacity duration-300 ${isHidden ? "opacity-0" : "opacity-100"}`}
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
                isHidden ? "opacity-0" : "opacity-100"
              }`}
            >
              +
            </button>
          </label>
        </div>
        {/* Avatar end */}
        {/* Account type */}
        <div className="flex flex-col font-inder">
          Choose your account type
          <label>
            <input className="hidden" type="radio" id="manager" name="account-type" value="manager" />
            <div className="flex items-center justify-between w-full px-4 py-2 mt-6 border border-white rounded-xl shadow-3xl hover:cursor-pointer hover:border hover:border-gray">
              <div className="text-left basis-[90%]">
                <h3 className="text-lg font-semibold sm:text-xl">Manager account</h3>
                <p className="text-base sm:text-xl sm:w-[35rem]">If you are looking to rent out your real estate, this account is specially made for that purpose.</p>
              </div>
              <figure className="w-32">
                <img className="object-cover w-full h-full" src={ManagerIcon} alt="manager" />
              </figure>
            </div>
          </label>
          {/*  */}
          <label>
            <input className="hidden" type="radio" id="customer" name="account-type" value="customer" />
            <div className="box-border flex items-center justify-between w-full px-4 py-2 mt-6 border border-white rounded-xl shadow-3xl hover:cursor-pointer hover:border-gray">
              <div className="text-left basis-[90%]">
                <h3 className="text-lg font-semibold sm:text-xl">Customer account</h3>
                <p className="text-base sm:text-xl sm:w-[35rem]">If you are not renting out your real estate, but looking to rent a venue or apartment this is the profile for you.</p>
              </div>
              <figure className="w-32">
                <img className="object-cover w-full h-full" src={CustomerIcon} alt="customer" />
              </figure>
            </div>
          </label>
        </div>
        <button className="p-2 border rounded-lg bg-success" type="submit" disabled={isLoading}>
          Register
        </button>
        {isError && <p className="error">Error: {isError}</p>}
        {isSuccess && <div className="success">Account was successfully created</div>}
      </form>
    </div>
  );
}

export default RegisterForm;
