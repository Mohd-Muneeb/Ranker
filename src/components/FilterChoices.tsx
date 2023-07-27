import React from "react";

const FilterChoices = () => {
  return (
    <div className="relative ">
      <input type="checkbox" id="sortbox" className="absolute hidden" />
      <label
        htmlFor="sortbox"
        className="flex cursor-pointer items-center space-x-1"
      >
        <span className="text-lg">Sort By</span>
        <svg
          className="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </label>

      <div
        id="sortboxmenu"
        className="absolute right-1 top-full z-20 mt-1 min-w-max rounded border border-gray-400 bg-gray-300 opacity-0 shadow transition delay-75 ease-in-out"
      >
        <ul className="block text-right text-gray-900">
          <li>
            <a href="#" className="block px-3 py-2 hover:bg-gray-200">
              Featured
            </a>
          </li>
          <li>
            <a href="#" className="block px-3 py-2 hover:bg-gray-200">
              Newest
            </a>
          </li>
          <li>
            <a href="#" className="block px-3 py-2 hover:bg-gray-200">
              Price: Low to High
            </a>
          </li>
          <li>
            <a href="#" className="block px-3 py-2 hover:bg-gray-200">
              Price: High to Low
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterChoices;
