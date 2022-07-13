import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function CreatePostContent() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.warn(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
        apiKey="70gb2ple3n4s75w5vqwai5zisk0z4ya4dt96kxgbpvtx0qd1"
        onInit={(evt, editor) => {
          editorRef.current = editor;
        }}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: true,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "preview",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <button onClick={log} type="button">
        Log editor content
      </button>
    </>
  );
}
