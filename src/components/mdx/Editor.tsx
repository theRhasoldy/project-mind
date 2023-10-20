"use client";

import React, { Suspense, useState } from "react";
import dynamic from "next/dynamic";

import { MDXEditorMethods } from "@mdxeditor/editor";

const EditorComp = dynamic(() => import("@/components/mdx/MDXEditor"), {
  ssr: false,
});

const markdown = `
# Hello world!
## Hello Second World!
Check the EditorComponent.tsx file for the code.

<div></div>
`;

export const Editor = () => {
  const editorRef = React.useRef<MDXEditorMethods>(null);
  const [output, setOutput] = useState(markdown);

  return (
    <Suspense fallback={null}>
      <EditorComp
        markdown={markdown}
        editorRef={editorRef}
        handleChange={(value) => setOutput(value)}
      />
      <div>{output}</div>
    </Suspense>
  );
};

export default Editor;
