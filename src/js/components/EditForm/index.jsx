import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import validator from "validator";

import { useApi } from "../../hooks/service/api";
import { venues } from "../../helpers/constant";

import SliderComponent from "../Slider";
import { useParams } from "react-router-dom";

const schema = yup
  .object({
    name: yup.string().min(3).required(),
    description: yup.string().min(10).required(),
    price: yup.number().positive().integer("please enter a price").min(1, "price must be at least 1").typeError("please enter a valid price").required("Please enter a price"),
    maxGuests: yup.number().positive().integer().max(200).typeError("please enter a number").required(),
    location: yup.object({
      city: yup.string().required("you are required to provide a city"),
      zip: yup.string("has to be number").required("you are required to fill in zip"),
      country: yup.string().required("you are required to fill out country"),
      continent: yup.string().required("you must provide a continent"),
    }),
  })
  .required();

function EditForm({ setShowForm, venueData }) {
  const { id } = useParams()
  const [mediaArray, setMediaArray] = useState([...venueData.media]);
  const { apiData, isSuccess, isLoading, isError, } = useApi(venues + id);

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    if (urlError) {
      return;
    }
    const method = "PUT";
    const updatedData = {...data, media: mediaArray}
    apiData(updatedData, method);
    setTimeout(() => {
      goBack();
    }, 2500);
  }

  function goBack() {
    setShowForm(false);
  }

  //  adding new images
  const addMedia = () => {
    const mediaInput = document.getElementById("media-input");
    if(mediaInput) {
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
    return <div>...loading</div>;
  }

  console.log(venueData);

  return (
    <section className="pt-72 bg-[#FDFDFD] w-3.5/7 mx-auto xl:w-desktop mb-14">
      <div className="hover:underline hover:cursor-pointer" onClick={goBack}>
        Back
      </div>
      <h1 className="w-11/12 mt-10 mb-12 text-4xl font-medium">{venueData.name}</h1>
      <SliderComponent images={mediaArray} name={venueData.name} />
      <div className="flex flex-col gap-3 mx-auto mt-3">
        {mediaArray.map((media, i) => (
          <div key={i} className="flex items-center justify-between">
            <p className="truncate">{media}</p>
            <button type="button" onClick={() => removeMedia(i)} className="px-2 border rounded-lg bg-error">
              X
            </button>
          </div>
        ))}
      </div>
      <form className="flex flex-col gap-5 mx-auto mt-5 bg-white font-inder" onSubmit={handleSubmit(onSubmit)}>
        {/* Show the images that is already set, and then allow it to continue and add images */}
        <div>
          <label className="flex flex-col">
            image - Url
            <input className="p-2 border rounded-lg" id="media-input" value={urlInput} pattern="/^(https?|ftp):\/\/(-\.)?([^\s/?.#-]+\.?)+(\/[^\s]*)?$/" onChange={handleUrlChange} type="url" />
            {<p className="error-message">{urlError}</p>}
          </label>
        </div>
        <div className="flex justify-between">
          <button disabled={!!urlError} className="p-2 border rounded-lg bg-success disabled:bg-gray" type="button" onClick={addMedia}>
            Add Media
          </button>
        </div>

        <label className="flex flex-col">
          name
          <input {...register("name")} className="p-2 border rounded-lg" type="text" defaultValue={venueData.name} />
          <p className="error-message">{errors.name?.message}</p>
        </label>

        <h3 className="font-semibold">Location</h3>
        <label className="flex flex-col">
          address
          <input {...register("location.address")} className="p-2 border rounded-lg" type="text" defaultValue={venueData.location.address} />
          <p className="error-message">{errors.address?.message}</p>
        </label>

        <label className="flex flex-col">
          city
          <input {...register("location.city")} className="p-2 border rounded-lg" type="text" defaultValue={venueData.location.city} />
          <p className="error-message">{errors.city?.message}</p>
        </label>

        <label className="flex flex-col">
          zip-code
          <input {...register("location.zip")} className="p-2 border rounded-lg" type="text" defaultValue={venueData.location.zip} />
          <p className="error-message">{errors.zip?.message}</p>
        </label>

        <label className="flex flex-col">
          country
          <input {...register("location.country")} className="p-2 border rounded-lg" type="text" defaultValue={venueData.location.country} />
          <p className="error-message">{errors.country?.message}</p>
        </label>

        <label className="flex flex-col">
          continent
          <input {...register("location.continent")} className="p-2 border rounded-lg" type="text" defaultValue={venueData.location.continent} />
          <p className="error-message">{errors.continent?.message}</p>
        </label>

        <h3 className="font-semibold">facilities</h3>
        {/* meta / facilities checkbox, true or false */}
        <div className="grid grid-cols-2">
          <label className="flex items-center gap-2">
            wifi
            <input {...register("meta.wifi")} className="p-2 border rounded-lg" type="checkbox" defaultChecked={venueData.meta.wifi} />
          </label>
          <label className="flex items-center gap-2">
            parking
            <input {...register("meta.parking")} className="p-2 border rounded-lg" type="checkbox" defaultChecked={venueData.meta.parking} />
          </label>
          <label className="flex items-center gap-2">
            breakfast
            <input {...register("meta.breakfast")} className="p-2 border rounded-lg" type="checkbox" defaultChecked={venueData.meta.breakfast} />
          </label>
          <label className="flex items-center gap-2">
            pets
            <input {...register("meta.pets")} className="p-2 border rounded-lg" type="checkbox" defaultChecked={venueData.meta.pets} />
          </label>
        </div>

        <label className="flex flex-col">
          guests
          <input {...register("maxGuests")} className="p-2 border rounded-lg" type="text" defaultValue={venueData.maxGuests} />
          <p className="error-message">{errors.maxGuests?.message}</p>
        </label>

        <label className="flex flex-col">
          price
          <input {...register("price")} className="p-2 border rounded-lg" type="number" defaultValue={venueData.price} />
          <p className="error-message">{errors.price?.message}</p>
        </label>

        <label className="flex flex-col">
          description
          <textarea {...register("description")} className="p-2 border rounded-lg" type="text" defaultValue={venueData.description}></textarea>
          <p className="error-message">{errors.description?.message}</p>
        </label>
        <input className="p-2 border rounded-lg bg-success hover:cursor-pointer" type="submit" />
        {isError && <p className="mt-2 error">Error: {isError}</p>}
        {isSuccess && <div className="mt-2 success">Avatar was successfully updated</div>}
      </form>
    </section>
  );
}

export default EditForm;
