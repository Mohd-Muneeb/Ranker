import dynamic from "next/dynamic";
import { useState } from "react";
import { createReactEditorJS } from "react-editor-js";

const CustomEditor = dynamic(
  async () => await import("../components/CustomEditor"),
  {
    ssr: false,
  }
);

const Editor = (props: unknown) => {
  const [content, setContent] = useState("");

  return (
    <div>
      <CustomEditor />
    </div>
  );
};

export default Editor;
