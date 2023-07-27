import { Tag } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import FontDownloadIcon from "@mui/icons-material/FontDownload";
import ReactTextareaAutosize from "react-textarea-autosize";

const CustomEditor = () => {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");

  useEffect(() => {
    console.log(Description);
  }, [Description]);

  return (
    <div className="w-full px-4 py-4 capitalize md:px-12">
      <h1 className="text-lg">Make your own poll now!</h1>
      <div className="mt-4 flex min-h-screen w-full flex-col gap-6">
        <div className="flex items-center gap-2">
          <Tag
            style={{
              font: "italic",
              fontSize: "2.5rem",
              opacity: Title === "" ? "40%" : "100%",
            }}
          />
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            autoFocus
            className="h-12  w-full text-4xl border-b-2 focus:outline-none "
            placeholder="Title"
          />
        </div>
        <div className="flex items-start gap-4 pl-2">
          <FontDownloadIcon
            style={{
              font: "italic",
              marginTop: "2px",
              fontSize: "1.5rem",
              opacity: Description === "" ? "40%" : "100%",
            }}
          />
          <ReactTextareaAutosize
            className="w-full text-lg capitalize focus:outline-none"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomEditor;
