import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

const VideoCard = ({ video, onClick }) => {
  const onClickHandler = () => {
    onClick(video);
  };

  console.log(video);
  return (
    <Grid item xs={3}>
      <Paper
        onClick={onClickHandler}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          padding: "15px",
          flexDirection: "column",
        }}
      >
        <img src={video.snippet.thumbnails.medium.url} alt="thumbnail" />
        <Typography style={{ marginTop: "10px" }}>
          {video.snippet.title}{" "}
        </Typography>
        <Typography style={{ marginTop: "10px" }}>
          Published by
          <span>
            <b>{" " + video.snippet.channelTitle}</b>
          </span>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default VideoCard;
