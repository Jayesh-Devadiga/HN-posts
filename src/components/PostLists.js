import React from "react";
import Post from "./Post";

const PostLists = ({ postsList, showPostJson }) => {
  console.log(postsList);
  return (
    <div>
      {postsList.map((post) => (
        <Post post={post} key={`${post.title}_${Math.floor(Math.random() * 10000)}`} showPostJson={showPostJson} />
      ))}
    </div>
  );
};

export default PostLists;
