import { CalendarMonth } from "@mui/icons-material";
import NorthIcon from "@mui/icons-material/North";
import React from "react";

const ChoiceCard = () => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex w-full gap-4">
        <img
          src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg"
          //   src="https://preview.redd.it/ukwldl5224eb1.png?width=640&crop=smart&auto=webp&s=6d0d8e7337ff66f1bc1674f266ae11bbf4587400"
          alt=""
          className="h-32 rounded-md shadow-sm"
        />
        <div>
          <h1 className="text-2xl font-medium">Title</h1>
          <p>
            Assigned by <span className="font-mono">Username</span>
          </p>
          <p className="text-sm font-light">
            <p className="flex items-center gap-2 my-1"><CalendarMonth /> 14th July, 2023</p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
            omnis totam porro placeat sint soluta! Ipsa nam incidunt, voluptates
            suscipit, amet quos dicta modi possimus ullam deserunt sapiente et
            provident?
          </p>
        </div>
      </div>
      <div className="flex w-full justify-end gap-4">
        <button>
          {" "}
          <NorthIcon /> Upvote
        </button>
      </div>
    </div>
  );
};

export default ChoiceCard;
