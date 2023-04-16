


function Categories({ categories }) {
  return (
    <div className="overflow-auto w-3.5/7">
    <ul className="flex gap-2 overflow-auto font-inder">
      {categories.map((category) => {
        return (
          <li key={category.id} className="flex flex-col items-center grow min-w-[6rem] max-w-[6rem] p-1 rounded-lg hover:cursor-pointer hover:shadow-inner">
            <img className="w-14" src={category.image} alt={category.title}/>
            <p className="text-base">{category.title}</p>
          </li>
        )
      })}
    </ul>
    </div>
  )
}

export default Categories;