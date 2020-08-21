import React, { useState, useEffect } from "react";
import "./../styles/Comment.css";
import CommentItem from "./CommentItem";
import CommentInput from "./CommentInput";
import db from "./../firebase/firebase";
import { useParams } from "react-router-dom";

function Comment() {
  const [comments, setComments] = useState([]);
  const { imageId } = useParams();

  useEffect(() => {
    db.collection("posts")
      .doc(imageId)
      .collection("comments")
      .orderBy("timestamp")
      .onSnapshot((snapshot) => {
        setComments(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  console.log(comments);

  return (
    <div className="comment">
      <div className="commentHeader">
        <h2>Comments</h2>
        <p>{comments.length} comments</p>
      </div>
      <CommentInput />
      {comments.map(({ userImage, username, comment, timestamp }) => (
        <>
          <CommentItem
            userImage={userImage}
            username={username}
            comment={comment}
            timestamp={timestamp}
          />
          <br />
        </>
      ))}
    </div>
  );
}

export default Comment;
