import Venues from "../Venues";

function EditVenue({ setActiveComponent, data }) {

  function goBack() {
    setActiveComponent("default");
  }

  return (
    <main className="pt-48 bg-[#FDFDFD] w-3.5/7 mx-auto xl:w-desktop mb-14">
      <div className="hover:underline hover:cursor-pointer" onClick={goBack}>
        Back
      </div>
      <h2 className="w-11/12 mt-10 mb-12 text-4xl font-medium">Your venues</h2>
      <Venues data={data} />
    </main>
  );
}

export default EditVenue;
