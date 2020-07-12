import React from "react";
import { Paper, Typography, CircularProgress } from "@material-ui/core";

const VideoDetail = (props) => {
  const { video } = props;

  if (!video)
    return (
      <div
        style={{
          height: "450px",
          weight: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </div>
    );

  const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;
  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: "450px" }}>
        <iframe
          frameBorder={0}
          height="100%"
          width="100%"
          title="Video Title"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: 15, borderRadius: 0 }}>
        <Typography variant="h4">{video.snippet.title}</Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </React.Fragment>
  );
};

export default VideoDetail;
