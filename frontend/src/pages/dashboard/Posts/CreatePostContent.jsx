import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import Swal from "sweetalert2";
import api from "../../../services/api";
import CurrentPagesContext from "../../../PagesContexts";
import "../dashboard.css";

/* COMPOSANT : Création de Post */
export default function CreatePostContent() {
  const editorRef = useRef(null);
  const { setPostContent } = useContext(CurrentPagesContext);
  const [alert, setAlert] = useState();
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState({});
  const article = {
    titre: "",
    date: "",
    texte: "",
    image: "",
  };

  /* FUNCTION controllée : enregistrement du Titre du Post */
  const handleTitre = (e) => {
    article.titre = e.target.value;
  };

  useEffect(() => {
    api.get(`api/tag`).then((res) => setTags(res.data));
  }, []);

  /* FUNCTION : génère la date du jour au format : YYYY-MM-DD */
  const setToday = () => {
    let today = "";
    today += `${new Date().getFullYear()}-`;
    today += `${new Date().getMonth() + 1}-`;
    today += new Date().getDate();
    article.date = today;
  };
  /* FUNCTION : Lance la génération de la date */
  setToday();

  /* FUNCTION controllée : enregistrement de l'URL de image principale du Post */
  const handleIamgeURL = (e) => {
    article.image = e.target.value;
  };

  // ***** A AMELIORER   ****** L'ajout des tags n'est pas encore fonctionnel
  // Appliquer des tags à un article :
  // 1 - on définit article : date / image / tag / texte / titre
  // 2 - Nous avons en retour du POST avec l'ID de l'article et il faut faire un GET de l'id du TAG
  // 3 - POST les id dans has_tag
  const handleChangeToggle = (e) => {
    setSelectedTags({ ...selectedTags, [e.target.name]: e.target.checked });
    console.warn(e.target.name);
    console.warn(e.target.checked);
  };
  
  console.warn(selectedTags);
  /* FUNCTION : soumet le formulaire du Post */
  const log = () => {
    if (editorRef.current) {
      article.texte = editorRef.current.getContent();

      console.warn({ article });
      Swal.fire({
        position: "bottom-end",
        icon: "success",
        title: "Article ajouté !",
        showConfirmButton: false,
        timer: 1700,
      });

      api
        .post(`/api/article/add`, article)
        .then((res) => res.data)
        .then((data) => {
          console.warn(data);
          setPostContent(data);
          setAlert("ArticleSaved");
          return data;
        });
    }
  };
  /* RENDU : Si enregistrement article validé : affiche une boite modale de redirection au choix */
  if (alert === "ArticleSaved") {
    return (
      <form className="form-ArticleSaved" name="form-reset-password-email">
        <p className="confirmation">Votre article a été enregistré !</p>
        <Link to="/admin/posts" className="btn btn-primary ms-auto w-2">
          <button className="btn btn-primary" type="button">
            Retourner au gestionnaire de posts
          </button>
        </Link>
        <Link to="/blog" className="btn btn-primary ms-auto w-2">
          <button className="btn btn-primary" type="button">
            Retourner aux articles en ligne
          </button>
        </Link>
      </form>
    );
  }

  /* RENDU : Sinon affiche l'éditeur de Post */
  return (
    <div className="contentTable">
      <div className="head-h2">
        <h2>Créer un article</h2>{" "}
      </div>
      <h4>Entrez un titre pour l'article</h4>

      <input
        className="editorInput"
        name="titrePost"
        type="text"
        placeholder="Entrez le titre de l'article"
        onChange={handleTitre}
      />

      <h4>Choisissez une image (url)</h4>

      <input
        className="editorInput"
        name="ImageURL"
        type="text"
        placeholder="Copiez-collez une URL"
        onChange={handleIamgeURL}
      />

      <h4>Choisissez des tagadd comms</h4>

      {tags.map((tag) => (
        <div className="form-check form-switch" key={tag.id}>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {tag.tag}{" "}
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onChange={handleChangeToggle}
              name={tag.tag}
            />
          </label>
        </div>
      ))}

      <h4 className="mt-2">Saisissez un article</h4>
      {/* COMPOSANT : Editeur TinyMCE avec clé API et paramètre de configuration */}
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
