import { useParams } from "react-router-dom";
import { useGet } from "../../js/hooks/service/get";
import { profile } from "../../js/helpers/constant";

function Profile() {
  let { name } = useParams();
  const { data, isLoading, isError } = useGet(profile + name);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  if(data) {
    console.log(data)
    return (
      <main>
        <h1>Profile</h1>
      </main>
    );
  }
}

export default Profile;
