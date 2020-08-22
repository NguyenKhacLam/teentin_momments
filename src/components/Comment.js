import React, { useState, useEffect } from "react";
import "./../styles/Comment.css";
import CommentItem from "./CommentItem";
import CommentInput from "./CommentInput";
import db from "./../firebase/firebase";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useStateValue } from "./../context/StateProvider";
import CircularProgress from "@material-ui/core/CircularProgress";

function Comment() {
  const [comments, setComments] = useState([]);
  const { imageId } = useParams();
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    db.collection("posts")
      .doc(imageId)
      .collection("comments")
      .orderBy("timestamp", "desc")
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
      {user ? (
        <CommentInput />
      ) : (
        <h2 className="comment__need">
          Bạn cần <Link to="/login">đăng nhập</Link> để bình luận
        </h2>
      )}
      {comments.length == 0 ? (
        <div className="comment__waiting">
          <CircularProgress />
        </div>
      ) : (
        comments.map(({ userImage, username, comment, timestamp }) => (
          <>
            <CommentItem
              userImage={userImage}
              username={username}
              comment={comment}
              timestamp={timestamp}
            />
            <br />
          </>
        ))
      )}
      {/* {} */}
    </div>
  );
}

export default Comment;
