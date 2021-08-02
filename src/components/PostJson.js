import { Card, CardContent, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  card: {
    color: "white",
    background: "black",
    fontSize: 18,
    borderRadius: 10,
  },
}));

const PostJson = ({ postJson }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <pre>{JSON.stringify(postJson, null, 10)}</pre>
      </CardContent>
    </Card>
  );
};

export default PostJson;
