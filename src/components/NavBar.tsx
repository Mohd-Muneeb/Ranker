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
            <input
              placeholder="Search..."
              className="rounded-md border-2 border-solid p-2 focus:outline-none"
            />
            <div className="flex items-center justify-center gap-2 rounded-md border-l-2 border-r-2 border-blacks-950 px-4 py-2 text-lg transition duration-150 ease-in hover:bg-blacks-50 hover:text-whites-200">
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
