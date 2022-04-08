import Link from "next/link";
import React, { useContext } from "react";
import { Categories } from ".";

const categories = [
  { name: "All", slug: "all" },
  { name: "React", slug: "react" },
  { name: "Blockchain", slug: "blockchain" },
  { name: "Web", slug: "web" },
  { name: "Mobile", slug: "mobile" },
];
const Header = () => {
  return (
    <div className="flex flex-col w-full  py-10  ">
      <div className="w-full flex float-left">
        {categories.map((category, index) => (
          <div className="bg-indigo-900 p-2 mx-5 rounded-lg" key={index}>
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <h1 className="text-md  press2p font-semibold   cursor-pointer text-white hover:text-gray-300 duration-100">
                {category.name}
              </h1>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex-grow border-t border-4 my-2 mx-5 border-gray-500 "></div>
    </div>
  );
};

export default Header;
