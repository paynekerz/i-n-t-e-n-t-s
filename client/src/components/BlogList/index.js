import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ blogPosts, title }) => {
  if (!thoughts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {blogPosts &&
        blogPosts.map((blogPost) => (
          <div key={blogPost._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {blogPost.blogPostAuthor} <br />
              <span style={{ fontSize: '1rem' }}>
                had this blogPost on {blogPost.createdAt}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{blogPost.blogPostText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/blogPosts/${blogPost._id}`}
            >
              Join the discussion on this blogPost.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default BlogList;
