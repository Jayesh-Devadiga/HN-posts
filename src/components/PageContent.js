import { CssBaseline, LinearProgress } from "@material-ui/core";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { backToHome, fetchPosts, showPostJson } from "../redux/actions";
import PostJson from "./PostJson";
import PostLists from "./PostLists";
import Titlebar from "./Titlebar";

const PageContent = (props) => {
  const { posts, fetchPosts, showPostJson, backToHome } = props;
  const { postsList, postJson, page, showingPostJson } = posts;

  useEffect(() => {
    fetchPosts(page);
    console.log(page);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchPosts(page);
    }, 10000);
    return () => {
      clearTimeout(timer);
    };
  }, [page]);

  return (
    <div style={{ background: "#ecf0f1", height: "100vh" }}>
      <CssBaseline />
      <Titlebar showingPostJson={showingPostJson} backToHome={backToHome} title={postJson.title} />
      {postsList.length === 0 && <LinearProgress />}
      <div style={{ padding: "20px" }}>
        {showingPostJson ? <PostJson postJson={postJson} /> : <PostLists postsList={postsList} showPostJson={showPostJson} />}
      </div>
    </div>
  );
};

const mapStateToProps = ({ posts }) => {
  return {
    posts,
  };
};

export default connect(mapStateToProps, { fetchPosts, showPostJson, backToHome })(PageContent);
