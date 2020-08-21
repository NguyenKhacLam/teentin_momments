import React from "react";
import "./../styles/ImageBox.css";
import { useHistory } from "react-router-dom";

function ImageBox({ id, imageUrl, title, description, like, share }) {
  let history = useHistory();

  const handleClick = (event) => {
    history.push(`/image/${id}`);
  };

  return (
    <div className="imageBox__item" onClick={handleClick}>
      <img src={imageUrl} alt={title} />
    </div>
  );
}

export default ImageBox;
