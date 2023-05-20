function Categories({ categories }) {
  // Create a system where you click on a category the name gets passed inn to a filter option like the search
  // create checkboxes also to check off facilities.
  return (
    <div className="overflow-auto">
      <ul className="flex gap-4 pb-2 overflow-auto font-inder">
        {categories.map((category) => {
          return (
            <li key={category.id} className="flex p-1 flex-col items-center min-w-[6rem] max-w-[6rem] cursor-pointer border-b-4 hover:border-gray border-white">
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
