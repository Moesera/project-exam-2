import { useForm } from 'react-hook-form';

function CreateVenue() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  
  return (
    <main className="pt-72 bg-[#FDFDFD] w-3.5/7 mx-auto xl:w-desktop mb-14">
      <h2 className="w-11/12 mt-10 mb-12 text-4xl font-medium">Create Venue</h2>
      <form className="flex flex-col gap-5 mx-auto bg-white font-inder" onSubmit={handleSubmit(onSubmit)}>
        <label className="flex flex-col">
          name
          <input {...register("name", { required: true, minLength: 3 })} className="p-2 border rounded-lg" type="text"/>
        </label>
        <label className="flex flex-col">
          description
          <textarea {...register("description", { required: true, minLength: 15 })} className="p-2 border rounded-lg" type="text"></textarea>
        </label>
        <label className="flex flex-col">
          media
          <input {...register("media")} className="p-2 border rounded-lg" type="text"  />
        </label>
        <label className="flex flex-col">
          price
          <input {...register("price", { required: true })} className="p-2 border rounded-lg" type="number"  />
        </label>
        <label className="flex flex-col">
          guests
          <input {...register("guests", { required: true, min: 1, max: 5 })} className="p-2 border rounded-lg" type="number"/>
        </label>
        <h3 className="font-semibold">facilities</h3>
        {/* meta / facilities checkbox, true or false */}
        <div className="grid grid-cols-2">
          <label className="flex items-center gap-2">
            wifi
            <input {...register("meta.wifi")} className="p-2 border rounded-lg" type="checkbox"  />
          </label>
          <label className="flex items-center gap-2">
            parking
            <input {...register("meta.parking")} className="p-2 border rounded-lg" type="checkbox"  />
          </label>
          <label className="flex items-center gap-2">
            breakfast
            <input {...register("meta.breakfast")} className="p-2 border rounded-lg" type="checkbox"  />
          </label>
          <label className="flex items-center gap-2">
            pets
            <input {...register("meta.pets")} className="p-2 border rounded-lg" type="checkbox"  />
          </label>
        </div>

        <h3 className="font-semibold">Location</h3>
        <label className="flex flex-col">
          address
          <input {...register("location.address")} className="p-2 border rounded-lg" type="text"  />
        </label>
        <label className="flex flex-col">
          city
          <input {...register("location.city", { required: true })} className="p-2 border rounded-lg" type="text"  />
        </label>
        <label className="flex flex-col">
          zip-code
          <input {...register("location.zip")} className="p-2 border rounded-lg" type="text"  />
        </label>
        <label className="flex flex-col">
          country
          <input {...register("location.country", { required: true })} className="p-2 border rounded-lg" type="text"  />
        </label>
        <label className="flex flex-col">
          continent
          <input {...register("location.continent", { required: true })} className="p-2 border rounded-lg" type="text" />
        </label>
         <button className="p-2 border rounded-lg bg-success" type="submit"> 
          Create Venue
        </button>
      </form>
    </main>
  );
}

export default CreateVenue;

// {/* disabled={isLoading} */}