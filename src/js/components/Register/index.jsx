import React, { useState } from "react";
import useRegister from "./../../hooks/service/register";
import NewAvatar from "./NewAvatar";

import AvatarPlaceholder from "../../../assets/images/placeholder/placeholder-profile.jpg";
import AddIcon from "../../../assets/interface/icons8-add-50.png";
import CancelIcon from "../../../assets/interface/icons8-cancel-50.png";
import ManagerIcon from "../../../assets/interface/icons8-manager-100.png";
import CustomerIcon from "../../../assets/interface/icons8-budget-100.png";

function increment({ setCount, count }) {
  setCount(count + 1);
}

function RegisterForm() {
  const [count, setCount] = useState(0);
  // Update the avatars to render out and display on the page
  const [avatars, setAvatars] = useState([]);
  
  const [isHidden, setIsHidden] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, error } = useRegister();

  function addImage(e) {
    if (e.key === "Enter") {
      // This is the new avatar image from the url input
      const newAvatar = e.target.value;
      increment({setCount, count});
      //  Setting the new avatar into the avatar array
      setAvatars([...avatars, newAvatar]);

      // addAvatar(avatar, {count, setCount});
      e.target.value = '';
    }
  }

  function setHidden() {
    setIsHidden(!isHidden);
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(event);
    // register(username, email, password);
  }

  return (
    <div className="flex flex-col justify-center min-h-full">
      <h2 className="w-11/12 mx-auto mb-12 text-4xl font-medium text-center">create your account</h2>
      {/* Form start */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 mx-auto bg-white w-4/7">
        <label className="flex flex-col font-inder">
          Username
          <input className="p-2 border rounded-lg" type="text" value={username} onChange={(event) => setUsername(event.target.value)} minLength={4} required/>
        </label>
        <label className="flex flex-col font-inder">
          Email
          <input className="p-2 border rounded-lg" type="email" value={email} onChange={(event) => setEmail(event.target.value)} pattern=".+@stud\.noroff\.no" required/>
        </label>
        <label className="flex flex-col font-inder">
          Password
          <input className="p-2 border rounded-lg" type="password" value={password} onChange={(event) => setPassword(event.target.value)} minLength={8} required/>
        </label>
        {/* Avatar */}
        <div className="flex flex-col font-inder">
          Avatar
          <div id="avatarContainer" className="flex gap-4">
            {/* Create this one again with the chosen image from the user
             on the button click bring up a popup to insert the url and then apply
             it to the component creating and depend it to the avatarContainer
             */}
            <label>
              <input className="hidden" type="radio" id="preset" name="avatar" value="preset" />
              <figure className="w-20 h-20 p-2 rounded-lg shadow-3xl hover:cursor-pointer hover:border hover:border-gray">
                <img className="object-cover w-full h-full" src={AvatarPlaceholder} alt="placeholder" pattern="^(https?|ftp):\/\/(-\.)?([^\s/?\.#-]+\.?)+(\/[^\s]*)?$" />
              </figure>
            </label>
            <NewAvatar avatars={avatars} setAvatars={setAvatars} count={count} setCount={setCount}/>
            {/*  */}
            {/* Add image button */}
            <button onClick={setHidden} id="addAvatar" type="button" className={`w-20 p-2 rounded-lg shadow-3xl hover:border hover:border-gray transition-opacity duration-300`}>
              <img className="object-cover w-full h-full transition-opacity duration-300" src={isHidden ? AddIcon : CancelIcon} alt="add" />
            </button>
            {/* End of image button */}
          </div>
          <label className="mt-2">
            <input
              onKeyDown={addImage}
              id="imageUrl"
              className={`w-full p-2 border rounded-lg transition-opacity duration-300 ${isHidden ? "opacity-0" : "opacity-100"}`}
              type="url"
              placeholder="url - press enter to confirm"
              pattern="^(https?|ftp):\/\/(-\.)?([^\s/?\.#-]+\.?)+(\/[^\s]*)?$"
            />
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
                <h3 className="text-lg font-semibold">Manager account</h3>
                <p className="text-base">If you are looking to rent out your real estate, this account is specially made for that purpose.</p>
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
                <h3 className="text-lg font-semibold">Customer account</h3>
                <p className="text-base">If you are not renting out your real estate, but looking to rent a venue or apartment this is the profile for you.</p>
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
        {error && <p>Error: {error.message}</p>}
      </form>
    </div>
  );
}

export default RegisterForm;
