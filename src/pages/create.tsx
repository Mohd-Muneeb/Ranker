import dynamic from "next/dynamic";
import { useState } from "react";
import { createReactEditorJS } from "react-editor-js";
import { InferGetServerSidePropsType } from "next";

const CustomEditor = dynamic(async () => await import("../components/CustomEditor"), {
	ssr: false,
});

const Editor = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const [content, setContent] = useState("");

	return (
		<div>
			<CustomEditor />
		</div>
	);
};

export default Editor;

export function getServerSideProps(){
	return {
		props: null
	}
}