import React from "react";
import "./../styles/Upload.css";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import MUIRichTextEditor from "mui-rte";

function Upload() {
  return (
    <div className="upload">
      <div class="form-style-5">
        <form>
          <fieldset>
            <legend>
              <span class="number">1</span> Content
            </legend>
            <input type="text" name="title" placeholder="Tilte" />
            <MUIRichTextEditor name="description" label="Start typing..." />
            {/* <textarea name="description" placeholder="Description"></textarea> */}
          </fieldset>
          <fieldset>
            <legend>
              <span class="number">2</span> Image
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
