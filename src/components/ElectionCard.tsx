import React from "react";
import StreamIcon from "@mui/icons-material/Stream";
import EventIcon from "@mui/icons-material/Event";
import PeopleIcon from "@mui/icons-material/People";
import TopContestantsTable from "./TopContestantsTable";

const ElectionCard = () => {
  return (
    <div className="my-2 rounded-md border-2 p-4 text-base md:w-[70vw]">
      <p className="text-lg font-medium text-black">Title Here</p>
      <p className="font-light text-blacks-50">Hosted by Temp</p>
      <p className="mt-2 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita natus
        aspernatur fuga similique quas ex, perspiciatis obcaecati quo velit,
        corrupti cum, quaerat illum. Laboriosam alias non quidem mollitia
        delectus voluptates.
      </p>
      <div className="my-4  rounded-xl bg-whites-100">
        <TopContestantsTable />
        
      </div>
      <div className="mt-2 flex gap-4">
        <h1>
          <StreamIcon /> Active
        </h1>
        <h1>
          {" "}
          <EventIcon /> 21st July
        </h1>
        <h1>
          <PeopleIcon /> 20,000 votes
        </h1>
      </div>
    </div>
  );
};

export default ElectionCard;
