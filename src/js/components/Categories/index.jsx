function Categories({ categories }) {
  return (
    <div className="overflow-auto w-3.5/7">
      <ul className="flex gap-4 overflow-auto font-inder">
        {categories.map((category) => {
          return (
            <li key={category.id} className="flex p-1 flex-col items-center min-w-[6rem] max-w-[6rem] rounded-lg hover:shadow-inner hover:cursor-pointer">
              <img className="w-14" src={category.image} alt={category.title} />
              <p className="text-base">{category.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
