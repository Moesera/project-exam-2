import { v4 as uuidv4 } from "uuid";

// function handleUpdate(index, newValue) {
//   const updatedAvatars = [...avatars];
//   updatedAvatars[index] = newValue;
//   setAvatars(updatedAvatars);
// }

function handleDelete() {}

export function NewAvatar({ avatars, count, setCount }) {
  console.log(avatars);
  if (avatars) {
    return (
      <>
        {avatars.map((avatar, index) => {
          return (
          <label key={uuidv4()} className="">
            <div onClick={handleDelete} className="group/item hidden absolute bg-gray left-auto top-auto px-[0.35rem] bottom-[46.5] ">
              X
            </div>
            <input className="hidden" type="radio" id={`preset ${index}`} name="avatar" value={`preset ${index}`} />
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

// export function addAvatar(avatar, { count, setCount }) {
//   increment({ setCount, count });

//   const label = document.createElement("label");
//   const radioButton = document.createElement("Input");
//   radioButton.className = "hidden";
//   radioButton.type = "radio";
//   radioButton.name = "avatar";
//   radioButton.value = `preset ${count}`;
//   radioButton.id = `preset ${count}`;

//   const removeButton = document.createElement("div");
//   removeButton.textContent = "X";
//   removeButton.className = "hidden absolute bg-gray left-[3.8rem] top-auto px-[0.35rem] bottom-[46.5] hover:visible";
//   removeButton.onclick = "";

//   const figure = document.createElement("figure");
//   figure.className = "w-20 h-20 p-2 rounded-lg shadow-3xl hover:cursor-pointer hover:border hover:border-gray";
//   const media = document.createElement("img");
//   media.src = avatar;
//   media.className = "object-cover w-full h-full";
//   media.alt = `preset ${count}`;

//   figure.append(removeButton, media);

//   label.append(radioButton, figure);

//   container.prepend(label);
// }
