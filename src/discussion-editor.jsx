import React, { useState } from "react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";

// Initialize a markdown parser
const mdParser = new MarkdownIt();

const DiscussionEditor = () => {
  const [content, setContent] = useState("");

  // Handle editor change event
  const handleEditorChange = ({ text }) => {
    setContent(text);
  };
  const plugins = [
    'header',
    'font-bold',
    'font-italic',
    'font-underline',
    'font-strikethrough',
    'list-unordered',
    'list-ordered',
    'block-quote',
    'block-wrap',

    'block-code-block',
     
 
    'link',
    'clear',
    'logger',
    'mode-toggle',
    'full-screen',
    'tab-insert'
  ]
  return (
    <div className="discussion-editor">
      <h2>Add a body</h2>
      <MdEditor
        value={content}
        plugins={plugins}
        style={{ height: "300px"}}
        renderHTML={(text) => mdParser.render(text)}
        onChange={handleEditorChange}
        config={{
          view: {
            menu: true,
            md: true,
            html: false,
          },
          // Customize the toolbar
          shortcuts: true,
          toolbars: {
            // Disable image, and other unwanted options
            image: false,
            undo: false,
            redo: false,
            // Only keep selected tools
            toolbar: [
              'bold', 'italic', 'strikethrough', 'underline', '|',
              'list-ul', 'list-ol', '|',
              'quote', 'code', 'table', 'hr', '|',
              'link'
            ]
          }
        }}
      />
      <div className="meta-options">
        <p>Markdown is supported</p>
        <p>Paste, drop, or click to add files</p>
      </div>
      <div className="footer">
        <input type="checkbox" /> I have done a search for similar discussions
      </div>
    </div>
  );
};

export default DiscussionEditor;
