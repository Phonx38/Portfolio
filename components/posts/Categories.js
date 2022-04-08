import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getCategories } from "../../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="bg-gray-900 shadow-lg rounded-sm p-8 my-8 ">
      <h3 className="text-l mb-8 player border-b pb-4">Tags</h3>
      <div className="">
        {categories.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <span className="cursor-pointer mx-2  my-1 hover:text-gray-200 text-gray-300 duration-100">
              #{category.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
