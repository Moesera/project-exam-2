import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import validator from "validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useApi } from "../../hooks/service/api";
import { venues } from "../../helpers/constant";

import SliderComponent from "../Slider/index";

const schema = yup
  .object({
    name: yup.string().min(3).required(),
    description: yup.string().min(10).required(),
    price: yup.number().positive().integer("please enter a price").min(1, "price must be at least 1").typeError("please enter a valid price").required("Please enter a price"),
    maxGuests: yup.number().positive().integer().max(100).typeError("please enter a number").required(),
    location: yup.object({
      city: yup.string().required("you are required to provide a city"),
      zip: yup.string("has to be number").required("you are required to fill in zip"),
      country: yup.string().required("you are required to fill out country"),
      continent: yup.string().required("you must provide a continent"),
    }),
  })
  .required();

function CreateVenue({ setActiveComponent }) {
  const [mediaArray, setMediaArray] = useState([]);
  const { apiData, isSuccess, isLoading, isError } = useApi(venues);

  const [urlInput, setUrlInput] = useState("");
  const [urlError, setUrlError] = useState("");

  const handleUrlChange = (event) => {
    setUrlInput(event.target.value);
    if (!validateUrl(event.target.value)) {
      setUrlError("Please enter a valid URL to apply image");
    } else {
      setUrlError("");
    }
  };

  function validateUrl(url) {
    if (validator.isURL(url)) {
      return true;
    }

    return false;
  }

  const notify = () =>
    toast.success("Venue was successfully created", {
      position: "bottom-center",
      autoClose: 2500,
      hideProgressBar: true,
      theme: "colored",
      closeOnClick: true,
    });

  function goBack() {
    setActiveComponent("default");
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    if (urlError) {
      return;
    }
    const method = "POST";
    notify();
    apiData(data, method);
    reset();
  }

  //  adding new images
  const addMedia = () => {
    const mediaInput = document.getElementById("media-input");

    if (mediaInput) {
      setMediaArray([...mediaArray, mediaInput.value]);
      mediaInput.value = "";
      setUrlInput("");
      validateUrl(mediaInput.value);
    }
  };

  const removeMedia = (i) => {
    setMediaArray(mediaArray.filter((media, index) => index !== i));
  };

  if (isLoading) {
    return (
      <div class="flex items-center justify-center min-h-screen p-5 bg-gray-100 min-w-screen">
        <div class="flex space-x-2 animate-pulse">
          <div class="w-3 h-3 bg-ocean rounded-full"></div>
          <div class="w-3 h-3 bg-ocean rounded-full"></div>
          <div class="w-3 h-3 bg-ocean rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-60 bg-[#FDFDFD] w-3.5/7 mx-auto xl:w-desktop mb-14 max-w-[550px]">
      <div className="hover:underline hover:cursor-pointer" onClick={goBack}>
        Back
      </div>
      <ToastContainer />
      <h1 className="w-11/12 mt-10 mb-12 text-4xl font-medium">Create Venue</h1>
      {isError && <p className="error">Error: {isError}</p>}
      {isSuccess && <div className="success">Venue was successfully created</div>}
      <SliderComponent images={mediaArray} alt={mediaArray} />
      <div className="flex flex-col gap-3 mx-auto mt-3">
        {mediaArray.map((media, i) => (
          <div key={i} className="flex items-center justify-between">
            <p className="truncate">{media}</p>
            <button type="button" onClick={() => removeMedia(i)} className="px-2 font-medium border rounded-lg bg-error hover:opacity-80">
              X
            </button>
          </div>
        ))}
      </div>
      <form className="flex flex-col gap-5 mx-auto bg-white font-inder" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="flex flex-col">
            image - Url
            <input
              className="p-2 border rounded-lg"
              id="media-input"
              value={urlInput}
              pattern="/^(https?|ftp):\/\/(-\.)?([^\s/?.#-]+\.?)+(\/[^\s]*)?$/"
              onChange={handleUrlChange}
              type="url"
            />
            {<p className="error-message">{urlError}</p>}
          </label>
        </div>
        <div className="flex justify-between">
          <button disabled={!!urlError} className="p-2 font-medium border rounded-lg bg-success disabled:bg-gray hover:opacity-80" type="button" onClick={addMedia}>
            Add Media
          </button>
        </div>
        <label className="flex flex-col">
          name
          <input {...register("name")} className="p-2 border rounded-lg" type="text" />
          <p className="error-message">{errors.name?.message}</p>
        </label>

        <label className="flex flex-col">
          description
          <textarea {...register("description")} className="p-2 border rounded-lg" type="text"></textarea>
          <p className="error-message">{errors.description?.message}</p>
        </label>

        <label className="flex flex-col">
          price
          <input {...register("price")} className="p-2 border rounded-lg" type="number" />
          <p className="error-message">{errors.price?.message}</p>
        </label>
        <label className="flex flex-col">
          guests
          <input {...register("maxGuests")} className="p-2 border rounded-lg" type="text" />
          <p className="error-message">{errors.maxGuests?.message}</p>
        </label>
        <h3 className="font-semibold">facilities</h3>
        {/* meta / facilities checkbox, true or false */}
        <div className="grid grid-cols-2">
          <label className="flex items-center gap-2">
            wifi
            <input {...register("meta.wifi")} className="p-2 border rounded-lg" type="checkbox" />
          </label>
          <label className="flex items-center gap-2">
            parking
            <input {...register("meta.parking")} className="p-2 border rounded-lg" type="checkbox" />
          </label>
          <label className="flex items-center gap-2">
            breakfast
            <input {...register("meta.breakfast")} className="p-2 border rounded-lg" type="checkbox" />
          </label>
          <label className="flex items-center gap-2">
            pets
            <input {...register("meta.pets")} className="p-2 border rounded-lg" type="checkbox" />
          </label>
        </div>

        <h3 className="font-semibold">Location</h3>
        <label className="flex flex-col">
          address
          <input {...register("location.address")} className="p-2 border rounded-lg" type="text" />
          <p className="error-message">{errors.address?.message}</p>
        </label>
        <label className="flex flex-col">
          city
          <input {...register("location.city")} className="p-2 border rounded-lg" type="text" />
          <p className="error-message">{errors.city?.message}</p>
        </label>
        <label className="flex flex-col">
          zip-code
          <input {...register("location.zip")} className="p-2 border rounded-lg" type="text" />
          <p className="error-message">{errors.zip?.message}</p>
        </label>
        <label className="flex flex-col">
          country
          <input {...register("location.country")} className="p-2 border rounded-lg" type="text" />
          <p className="error-message">{errors.country?.message}</p>
        </label>
        <label className="flex flex-col">
          continent
          <input {...register("location.continent")} className="p-2 border rounded-lg" type="text" />
          <p className="error-message">{errors.continent?.message}</p>
        </label>
        <input className="p-2 font-medium border rounded-lg bg-success hover:cursor-pointer hover:opacity-80" type="submit" />
      </form>
    </main>
  );
}

export default CreateVenue;
