import React from 'react';
import "./style.css"

const CommentList = ({ comments = [] }) => {
  if (!comments.length) {
    return <h3 className="commentSection">So empty inside...</h3>;
  }

  return (
    <>
      <h3 className="commentSection">
        HEY LOOK! Theres some stuff...
      </h3>
      <div className="commentCard">
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="commentKeyDiv">
              <div>
                <h5 className="commentHeader">
                  {comment.commentAuthor} commented{' '}
                  <span style={{ fontSize: '0.825rem' }}>
                    on {comment.createdAt}
                  </span>
                </h5>
                <p className="commentBody">{comment.commentText}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CommentList;
