import Link from "next/link";
import React from "react";
import ChoiceCard from "./ChoiceCard";

const ChoiceRanking = () => {
  return (
    <div className=" ">
      <h1 className="mb-4">
        Contestants for this poll are here! Don&apos;t find what you are looking
        for? <Link href="#">Make a new entry </Link>
      </h1>
      <div className="rounded-md bg-whites-200 p-4">
        <ChoiceCard />
      </div>
    </div>
  );
};

export default ChoiceRanking;
