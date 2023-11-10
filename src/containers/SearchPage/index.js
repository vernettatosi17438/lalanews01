import React from "react";
import PropTypes from "prop-types";
import PostItem from "./PostItem";

function SearchPage({ q, posts }) {
  return (
    <div>
      <div className="border-b mb-4 pb-4">
        <h1 className="text-lg font-semibold">Result search for: {q}</h1>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-4 pb-10">
          {posts.map((post) => (
            <PostItem key={post.id} item={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

SearchPage.propTypes = {
  q: PropTypes.string,
  posts: PropTypes.array,
};

export default SearchPage;
