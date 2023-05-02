import { v4 as uuidv4 } from "uuid";

// function handleUpdate(index, newValue) {
//   const updatedAvatars = [...avatars];
//   updatedAvatars[index] = newValue;
//   setAvatars(updatedAvatars);
// }

function handleDelete() {}

export function NewAvatar({ avatars, count, setCount }) {
  if (avatars) {
    return (
      <>
        {avatars.map((avatar, index) => {
          return (
          <label key={uuidv4()} className="">
            <div onClick={handleDelete} className="group/item hidden absolute bg-gray left-auto top-auto px-[0.35rem] bottom-[46.5] ">
              X
            </div>
            <input className="hidden" type="radio" id={`preset ${index}`} name="avatar" value={avatar} />
            <figure className="w-20 h-20 p-2 rounded-lg group/edit group-hover/item:visible shadow-3xl hover:cursor-pointer hover:border hover:border-gray">
              <img className="object-cover w-full h-full" src={avatar} alt={`preset ${count}`} pattern="^(https?|ftp):\/\/(-\.)?([^\s/?\.#-]+\.?)+(\/[^\s]*)?$"/>
            </figure>
          </label>
          )
        })}
      </>
    );
  }

  return;
}

export default NewAvatar;
