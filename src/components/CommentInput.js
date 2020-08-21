import React, { useState } from "react";
import "./../styles/CommentInput.css";
import { useStateValue } from "./../context/StateProvider";
import Avatar from "@material-ui/core/Avatar";
import db from "./../firebase/firebase";
import { useParams } from "react-router-dom";
import firebase from "firebase";

function CommentInput() {
  const [{ user }] = useStateValue();
  const { imageId } = useParams();
  const [input, setInput] = useState("");

  const sendComment = (e) => {
    e.preventDefault();
    if (imageId) {
      db.collection("posts").doc(imageId).collection("comments").add({
        comment: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        username: user?.displayName,
        userImage: user?.photoURL,
      });
      setInput("");
    }
  };

  return (
    <div className="commentInput">
      <Avatar src={user?.photoURL} />
      <form>
        <input
          type="text"
          value={input}
          placeholder="Write a comment"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" onClick={sendComment}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default CommentInput;
