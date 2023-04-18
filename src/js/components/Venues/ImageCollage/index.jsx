function ImageCollage({images, name}) {
  
  return (
    <div>
      {images.map((img) => {
        return (
          <figure key={img}>
            <img src={img} alt={name} />
          </figure>
        );
      })}
    </div>
  );
}

export default ImageCollage;
