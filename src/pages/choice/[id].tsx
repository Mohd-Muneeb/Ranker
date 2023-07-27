import React from "react";
import BreadCrumbs from "~/components/BreadCrumbs";
import ChoiceRanking from "~/components/ChoiceRanking";
import FilterChoices from "~/components/FilterChoices";
import SearchChoice from "~/components/SearchChoice";

const ChoicePage = (props: unknown) => {
  return (
    <div className="mb-4 h-full min-h-screen  rounded-xl  p-4 px-4 text-blacks-950 md:px-12">
      <BreadCrumbs />
      <hr className="my-2" />
      <div className="relative my-4 flex h-full flex-col items-center justify-center gap-4 overflow-hidden rounded-lg bg-whites-50 py-4">
        <h1 className="w-full text-3xl">Title</h1>
        <p className="w-full">hosted by ```username```</p>
        <div className="h-96 w-full overflow-hidden">
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/0*mF4WR8iBp219HAb3"
            className="-z-10 bg-gradient-to-r from-white to-black"
          />
        </div>
        <div className=" w-full">
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, beatae
            porro ut hic doloribus aperiam commodi obcaecati fugit corrupti
            nihil architecto iure, debitis possimus maxime, deserunt tempore
            nisi consequuntur non.
          </p>
        </div>
        <div className="flex w-full items-center justify-between p-4">
          <SearchChoice />
          <FilterChoices />
        </div>
        <div className="w-full">
          <ChoiceRanking />
        </div>
      </div>
    </div>
  );
};

export default ChoicePage;
