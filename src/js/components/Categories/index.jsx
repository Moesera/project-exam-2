


function Categories({ categories }) {
  return (
    <ul className="flex gap-6 font-inder">
      {categories.map((category) => {
        return (
          <li key={category.id} className="flex flex-col items-center">
            <img className="w-14" src={category.image} alt={category.title}/>
            <p>{category.title}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default Categories;