import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { KeyboardBackspace } from "@material-ui/icons";
import React from "react";

const Titlebar = ({ showingPostJson, backToHome, title }) => {
  const renderHeading = () => {
    if (showingPostJson) {
      return (
        <>
          <IconButton onClick={backToHome}>
            <KeyboardBackspace />
          </IconButton>
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            {title}
          </Typography>
        </>
      );
    }
    return (
      <>
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          Post List
        </Typography>
      </>
    );
  };
  return (
    <AppBar position="static" style={{ background: "grey" }}>
      <Toolbar>{renderHeading()}</Toolbar>
    </AppBar>
  );
};

export default Titlebar;
