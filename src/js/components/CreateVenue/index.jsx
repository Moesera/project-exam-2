import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useApi } from "../../hooks/service/api";
import { venues } from "../../helpers/constant";

// import SliderComponent from "../Slider/index";

const schema = yup
  .object({
    name: yup.string().min(3).required(),
    description: yup.string().min(10).required(),
    media: yup.array().of(
      yup
        .string()
        .url()
        .matches(/^(https?|ftp):\/\/(-\.)?([^\s/?.#-]+\.?)+(\/[^\s]*)?$/, "non-valid url, start with https/ftp and with that ends with jpg")
    ),
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

function CreateVenue({setActiveComponent}) {
  const [mediaFields, setMediaFields] = useState([{ url: "" }]);
  const { apiData, isSuccess, isLoading, isError } = useApi(venues);

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
    const method = "POST"
    console.log(data);
    apiData(data, method);
    reset();
  }

  const addMediaField = () => {
    setMediaFields([...mediaFields, { url: "" }]);
  };

  const removeMediaField = () => {
    setMediaFields(mediaFields.slice(0, -1));
  };

  if (isLoading) {
    return <div>...Loading</div>;
  }

  return (
    <main className="pt-72 bg-[#FDFDFD] w-3.5/7 mx-auto xl:w-desktop mb-14">
        <div className="hover:underline hover:cursor-pointer" onClick={goBack}>
          Back
        </div>
      <h1 className="w-11/12 mt-10 mb-12 text-4xl font-medium">Create Venue</h1>
      {/* <SliderComponent images={mediaFields.url} alt={mediaFields.alt} /> */}
      <form className="flex flex-col gap-5 mx-auto bg-white font-inder" onSubmit={handleSubmit(onSubmit)}>
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
        {/* media start */}
        {mediaFields.map((field, index) => (
          <div key={index}>
            <label className="flex flex-col">
              image - Url {index}
              <input {...register(`media[${index}]`)} className="p-2 border rounded-lg" type="url" />
            </label>
            {errors?.media?.[index]?.url && <p className="error-message">{errors.media[index].url.message}</p>}
          </div>
        ))}
        <div className="flex justify-between">
          <button className="p-2 border rounded-lg bg-success" type="button" onClick={addMediaField}>
            Add Media
          </button>
          <button className="p-2 border rounded-lg bg-error" type="button" onClick={removeMediaField}>
            Remove Media
          </button>
        </div>
        {/* end */}
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
        <input className="p-2 border rounded-lg bg-success hover:cursor-pointer" type="submit" />
        {isError && <p className="error">Error: {isError}</p>}
        {isSuccess && <div className="success">Venue was successfully created</div>}
      </form>
    </main>
  );
}

export default CreateVenue;

// {/* disabled={isLoading} */}
