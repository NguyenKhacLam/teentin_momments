import React, { useState } from "react";
import "draft-js/dist/Draft.css";
import "./../styles/Upload.css";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function Upload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="upload">
      <div className="form-style-5">
        <form>
          <fieldset>
            <legend>
              <span className="number">1</span> Content
            </legend>
            <input
              type="text"
              name="title"
              placeholder="Tilte"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <CKEditor
              editor={ClassicEditor}
              data={description}
              onChange={(event, editor) => {
                const data = editor.getData();
                setDescription(data);
              }}
            />
          </fieldset>
          <fieldset>
            <legend>
              <span className="number">2</span> Image
            </legend>
            <input type="file" name="file" />
          </fieldset>
          <input type="submit" value="Apply" />
        </form>
      </div>
      <Link to="/">
        <KeyboardBackspaceIcon />
        Quay lại trang chủ
      </Link>
    </div>
  );
}

export default Upload;
