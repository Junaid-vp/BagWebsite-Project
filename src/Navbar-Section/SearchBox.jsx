import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../Hooks/UseFetch";
import ProductCard from "../Reusable Components/ProductCart";

function SearchBox() {
  const [Search, setSearch] = useState("");
  const { datas } = useFetch("/products");

  const FilteredDatas = datas?.filter((value) =>
    value.name.toLowerCase().includes(Search.toLowerCase())
  );

  return (
    <div
      className="px-4 sm:px-6 lg:px-8 py-6 max-w-[1200px] mx-auto"
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-anchor-placement="center-bottom"
    >
      <div className="mb-4">
        <Link
          to="/"
          className="text-dark-600 hover:underline text-sm sm:text-base"
        >
          ← Back to Home
        </Link>
      </div>

      <div className="mb-8 ">
        <input
          value={Search}
          type="text"
          placeholder="Search products..."
          className="w-full border border-gray-300 rounded-lg p-3 text-base focus:ring-2 focus:ring-dark-400 focus:border-dark-400 outline-none"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FilteredDatas?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {FilteredDatas?.length === 0 && (
          <p className="text-center mt-10 text-lg text-gray-600">
            No products found
          </p>
        )}
          

       {FilteredDatas?.length === 0 && (
  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
    <h6 className="col-span-full text-lg font-semibold mb-4">You May Also Like</h6>
    {datas?.slice(40,48).map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
)}

        
      </div>
    </div>
  );
}

export default SearchBox;
