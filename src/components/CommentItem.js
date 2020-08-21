import React from "react";
import "./../styles/CommentItem.css";
import Avatar from "@material-ui/core/Avatar";

function CommentItem({ userImage, username, comment, timestamp }) {
  return (
    <div className="commentItem">
      <div className="commentItem__main">
        <Avatar alt="Remy Sharp" src={userImage} />
        <div className="commentItem__content">
          <h3>{username}</h3>
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
}

export default CommentItem;
