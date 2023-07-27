import Link from "next/link";
import CreateIcon from "@mui/icons-material/Create";
import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="ml-[2.5vw] w-[95vw] text-blacks-950">
        <div className=" flex h-16  flex-row items-center justify-between px-4 py-2 md:px-12">
          <div>
            <h1 className="text-lg font-medium">Your Choice</h1>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="relative flex h-12 w-60  items-center overflow-hidden rounded-lg bg-white border-2 focus-within:border-blacks-50">
              <div className="grid h-full w-12 place-items-center text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                className="peer capitalize h-full w-full pr-2 text-sm text-gray-700 outline-none"
                type="text"
                id="search"
                placeholder="Search something.."
              />
            </div>
            <div className="flex items-center justify-center gap-2 rounded-md border-2 border-blacks-950 px-4 py-2 text-lg transition duration-150 ease-in hover:bg-blacks-50 hover:text-whites-200">
              <CreateIcon />
              <Link href="/create" className="">
                Create
              </Link>
            </div>
          </div>
        </div>
        <hr className="mb-4 bg-blacks-950" />
      </div>
    </>
  );
};

export default NavBar;
