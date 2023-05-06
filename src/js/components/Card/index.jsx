function CardComponent({ title, content, media, alt }) {

  return (
    <div className="flex items-center justify-between min-h-[10rem] gap-2 px-4 py-2 rounded-xl shadow-3xl group/item hover:cursor-pointer">
      <div className="text-lg md-sm:text-2xl basis-[75%] py-4">
        <h2 className="font-semibold">{title}</h2>
        <p className="group-hover/item:underline">{content}</p>
      </div>
      <figure className="w-[6rem] h-[6rem] md-sm:w-[7rem] md-sm:h-[7rem]">
        <img className="object-cover w-full h-full" src={media} alt={alt} />
      </figure>
    </div>
  );
}

export default CardComponent;
