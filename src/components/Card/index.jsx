import React from "react";
import "./index.css";

const Card = ({
  userImage,
  userName,
  mainImage,
  likeCount,
  comment,
  reply
}) => {
  return (
    <div className="card">
      <div className="header">
        <div className="user-wrapper">
          <img className="user-image" src={userImage} />
          <span className="user-name">{userName}</span>
        </div>
        <img
          className="more"
          src="https://img.icons8.com/windows/32/000000/more.png"
        />
      </div>
      <img className="main-image" src={mainImage} />
      <div className="icon-wrapper">
        <div>
          <img
            className="icon"
            src="https://img.icons8.com/ios/50/000000/like.png"
          />
          <img
            className="icon"
            src="https://img.icons8.com/ios/50/000000/speech-bubble-with-dots.png"
          />
          <img
            className="icon"
            src="https://img.icons8.com/ios/50/000000/paper-plane.png"
          />
        </div>
        <img
          className="icon2"
          src="https://img.icons8.com/ios/50/000000/upload-to-cloud.png"
        />
      </div>
      <div className="like-count-wrapper">
        <span className="like-count">좋아요 {likeCount}개</span>
      </div>
      <div className="footer">
        <span className="user-name">{userName}</span>
        <span className="user-comment">{comment}</span>
        <div className="reply-wrapper">
          <span className="reply">댓글 {reply}개 모두 보기</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
