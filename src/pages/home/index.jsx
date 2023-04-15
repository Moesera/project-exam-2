
import { categoryList } from "../../js/components/Categories/list";
import Categories from "../../js/components/Categories";

function Home() {
  return (
    <main>
      <h1 className="text-2xl font-bold underline">Home</h1>
      <Categories categories={categoryList} />
    </main>
  );
}

export default Home;
