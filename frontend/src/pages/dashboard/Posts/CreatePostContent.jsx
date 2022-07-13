import React, { useContext, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import api from "../../../services/api";
import CurrentPagesContext from "../../../PagesContexts";
import "../dashboard.css";

export default function CreatePostContent() {
  const editorRef = useRef(null);
  const { setPostContent } = useContext(CurrentPagesContext);

  const article = {
    titre: "",
    date: "",
    texte: "",
    image: "",
  };

  const handleTitre = (e) => {
    article.titre = e.target.value;
  };

  const setToday = () => {
    let today = "";
    today += `${new Date().getFullYear()}-`;
    today += `${new Date().getMonth() + 1}-`;
    today += new Date().getDate();
    article.date = today;
  };

  setToday();

  // https://upload.wikimedia.org/wikipedia/commons/c/c8/Pizza_Margherita_stu_spivack.jpg
  const handleIamgeURL = (e) => {
    article.image = e.target.value;
  };

  const log = () => {
    if (editorRef.current) {
      // console.warn(editorRef.current.getContent());
      article.texte = editorRef.current.getContent();
      console.warn({ article });
      api
        .post(`/api/article`, article)
        .then((res) => res.data)
        .then((data) => {
          console.warn(data);
          setPostContent(data);
        });
    }
  };

  return (
    <div className="contentTable">
      <div className="head-h2-btn">
        <h2>Créer un article</h2>{" "}
      </div>
      <h4>Entrez un titre pour l'article</h4>

      <input
        className="mb-1 editorInput"
        name="titrePost"
        type="text"
        placeholder="Entrez le titre de l'article"
        onChange={handleTitre}
      />

      <h4>Choisissez une image (url)</h4>

      <input
        className="mb-1 editorInput"
        name="ImageURL"
        type="text"
        placeholder="Copiez-collez une URL"
        onChange={handleIamgeURL}
      />

      <h4 className="mt-2">Saisissez un article</h4>
      <Editor
        apiKey="70gb2ple3n4s75w5vqwai5zisk0z4ya4dt96kxgbpvtx0qd1"
        onInit={(evt, editor) => {
          editorRef.current = editor;
        }}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          width: 800,
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
            "emoticons",
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
      <button
        className="btn btn-primary w-1 ms-auto"
        onClick={log}
        type="button"
      >
        Enregistrer l'article
      </button>
    </div>
  );
}
