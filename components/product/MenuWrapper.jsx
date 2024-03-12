import React, { useEffect, useState } from "react";
import Title from "../ui/Title";
import MenuItem from "./MenuItem";
import productList from "./products";

const MenuWrapper = ( ) => {
  const [filter, setFilter] = useState(productList); // Initialize filter with productList
  const [productLimit, setProductLimit] = useState(1);

  // useEffect to update filter when productList changes
  useEffect(() => {
    setFilter(productList);
  }, [productList]);

  return (
    <div className="container mx-auto  mb-16">
      <div className="flex flex-col items-center w-full">
        <Title addClass="text-[40px]">Our Menu</Title>
      </div>
      <div className="mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 min-h-[450px]">
        {filter.length > 0 &&
          filter
            .slice(0, productLimit)
            .map((product) => <MenuItem key={product._id} product={product} />)} {/* Changed parameter name */}
      </div>
      <div className="flex items-center justify-center my-8">
        <a
          href="https://www.instagram.com/stories/highlights/18017864429110043/"
          target="_blank"
          className="btn-primary"
        >
          View More
        </a>
        {/* <button
          className="btn-primary"
          onClick={() => setProductLimit(productLimit + 3)}
        >
          View More
        </button> */}
      </div>
    </div>
  );
};

export default MenuWrapper;
