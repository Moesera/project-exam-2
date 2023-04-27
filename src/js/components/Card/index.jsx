import ProfileElements from "./Profile";

function CardComponent({ elements }) {
  console.log(elements);
  return (
    <div className="w-full">
      <ProfileElements owner={elements} />
    </div>
  );
}

export default CardComponent;
