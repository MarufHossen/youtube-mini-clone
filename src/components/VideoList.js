import React from "react";
import VideoItem from "./VideoItem";

import { Grid } from "@material-ui/core";

const VideoList = ({ videos, onSelect }) => {
  let videosFilter = videos.filter((video, index) => index < 3);
  const videoList = videosFilter.map((video, id) => (
    <VideoItem video={video} key={id} onSelect={onSelect} />
  ));

  return (
    <Grid container spacing={5}>
      {videoList}
    </Grid>
  );
};

export default VideoList;
