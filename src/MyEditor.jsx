import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
 

const MyEditor = () => {
  const [value, setValue] = useState("");
  const quillRef = useRef(null);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline"],
      ["code-block"],
    ],
  };

  const formats = [
    "header",
    "font",
    "list",
    "bullet",
    "bold",
    "italic",
    "underline",
    "code-block",
  ];

  return (
    <div>
      <div className="my-editor">
        <ReactQuill
          ref={quillRef}
          theme="snow"
          value={value}
          onChange={setValue}
          modules={modules}
          formats={formats}
        />
      </div>
      <div className="editor-content">
        <h2>Editor Content:</h2>
        <div dangerouslySetInnerHTML={{ __html: value }} />
      </div>
    </div>
  );
};

export default MyEditor;
