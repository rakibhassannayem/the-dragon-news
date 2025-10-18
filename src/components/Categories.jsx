import { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);
  return (
    <div>
      <h2 className="font-bold">All Category ({categories.length})</h2>
      <div className="grid gap-2 mt-4">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.id}`}
            key={category.id}
            className={"border border-base-200 font-medium p-2 bg-base-100 hover:bg-base-200 text-accent"}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
