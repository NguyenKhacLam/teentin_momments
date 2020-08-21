import React, { useState, useEffect } from "react";
import "./../styles/Body.css";
import Header from "./Header";
import ImageBox from "./ImageBox";
import db from "./../firebase/firebase";

function Body() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setImages(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          url: doc.data().imageUrl,
          title: doc.data().title,
          description: doc.data().Description,
        }))
      );
    });
  }, []);

  return (
    <div className="body">
      <Header />
      <div className="body__content">
        {images.map((image) => (
          <ImageBox
            id={image.id}
            key={image.id}
            imageUrl={image.url}
            title={image.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Body;
