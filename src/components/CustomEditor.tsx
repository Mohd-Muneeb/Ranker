import { Tag } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import FontDownloadIcon from "@mui/icons-material/FontDownload";
import ReactTextareaAutosize from "react-textarea-autosize";
import { FileUploader } from "react-drag-drop-files";
import PollChoice from "./PollChoice";

const CustomEditor = () => {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [file, setFile] = useState<Blob | null>(null);

  useEffect(() => {
    console.log(Description);
  }, [Description]);

  const fileTypes = ["png", "jpeg", "jpg"];

  const handleChange = (file: Blob) => {
    setFile(file);
  };

  return (
    <div className="w-full px-4 py-4 md:px-12">
      <h1 className="text-lg">Make your own poll now!</h1>
      <div className="h-full">
        <div className="my-4 flex w-full flex-col gap-6">
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
              className="h-12  w-full border-b-2 text-4xl focus:outline-none "
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
            <ReactTextareaAutosize minRows={7}
              placeholder="Description"
              className="w-full text-lg capitalize focus:outline-none"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="w-full items-center flex ">
            <div className="w-full">

              {file === null ? (
                <FileUploader
                  handleChange={handleChange}
                  name="file"
                  types={fileTypes}
                />
              ) : (
                <img
                  src=""
                  alt="Whoops"
                />
              )}
            </div>
          </div>
        </div>
        <PollChoice />
        <h1 className="mb-4">Note: Make sure you have not entered used any offensive language and be civil</h1>
        <button className="flex items-center justify-center gap-2 rounded-md border-2 border-blacks-950 px-4 py-2 text-base transition duration-150 ease-in hover:bg-blacks-50 hover:text-whites-200">Submit</button>
      </div>
    </div>
  );
};

export default CustomEditor;
