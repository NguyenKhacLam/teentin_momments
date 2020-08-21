import React, { useState, useEffect } from "react";
import "./../styles/ShowDetail.css";
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Comment from "./Comment";
import { useHistory, useParams } from "react-router-dom";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import db from "./../firebase/firebase";

function ShowDetails() {
  let history = useHistory();
  const { imageId } = useParams();
  const [post, setPost] = useState({
    title: "",
    description: "",
    imageUrl: "",
    timestamp: null,
  });

  useEffect(() => {
    db.collection("posts")
      .doc(imageId)
      .onSnapshot((snapshot) => {
        setPost(snapshot.data());
        showDescription(snapshot.data().description);
      });
  }, []);

  const handleBack = () => {
    history.push("/");
  };

  const showDescription = (html) => {
    document.getElementById("showDetails__contentDecription").innerHTML = html;
  };

  return (
    <div className="showDetails">
      <header className="showDetails__header">
        <IconButton onClick={handleBack}>
          <ArrowBackIcon />
        </IconButton>
      </header>
      <div className="showDetails__content">
        <div className="showDetails__contentImg">
          <img src={post?.imageUrl} alt={post?.title} />
          <div className="background"></div>
        </div>
        <div className="showDetails__contentMain">
          <h2>{post?.title}</h2>
          <p className="showDetails__contentMainTimestamp">
            {new Date(post?.timestamp?.toDate()).toUTCString()}
          </p>
          <div id="showDetails__contentDecription"></div>
          <Comment />
        </div>
      </div>
    </div>
  );
}

export default ShowDetails;
