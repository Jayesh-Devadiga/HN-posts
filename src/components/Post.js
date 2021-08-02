import { Card, CardContent, Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  card: {
    color: "white",
    background: "black",
    marginBottom: 20,
    borderRadius: 10,
    cursor: "pointer",
  },
}));

const Post = ({ post, showPostJson }) => {
  const { created_at, title, url, author } = post;
  const classes = useStyles();
  return (
    <Card className={classes.card} onClick={() => showPostJson(post)}>
      <CardContent>
        <Typography>
          <span style={{ fontWeight: "bold" }}>Title: </span>
          {title}
        </Typography>
        <Typography>
          <span style={{ fontWeight: "bold" }}>URL: </span>
          {url ? <Link>{url}</Link> : `No URL found`}
        </Typography>
        <Typography>
          <span style={{ fontWeight: "bold" }}>Created At: </span>
          {new Date(created_at).toDateString()}
        </Typography>
        <Typography>
          <span style={{ fontWeight: "bold" }}>Author: </span>
          {author}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
