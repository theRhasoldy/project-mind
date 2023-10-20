import {
  MDXEditor,
  MDXEditorMethods,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  markdownShortcutPlugin,
  thematicBreakPlugin,
  jsxPlugin,
  GenericJsxEditor,
} from "@mdxeditor/editor";
import { FC } from "react";

interface EditorProps {
  handleChange?: (markdown: string) => void;
  markdown: string;
  editorRef?: React.MutableRefObject<MDXEditorMethods | null>;
}

const Editor: FC<EditorProps> = ({ handleChange, markdown, editorRef }) => {
  return (
    <MDXEditor
      onChange={handleChange}
      ref={editorRef}
      markdown={markdown}
      toMarkdownOptions={{ quote: "'", bullet: "-" }}
      plugins={[
        headingsPlugin({
          allowedHeadingLevels: [1, 2, 3],
        }),
        listsPlugin(),
        quotePlugin(),
        jsxPlugin({
          jsxComponentDescriptors: [
            {
              name: "div",
              kind: "flow",
              Editor: () => (
                <div style={{ backgroundColor: "red" }}>Hello Mom</div>
              ),
              props: [],
            },
          ],
        }),
        thematicBreakPlugin(),
        markdownShortcutPlugin(),
      ]}
    />
  );
};
export default Editor;
