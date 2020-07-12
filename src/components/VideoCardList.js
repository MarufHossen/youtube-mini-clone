import React from "react";
import VideoCard from "./VideoCard";
import { Grid, Paper } from "@material-ui/core";

const VideoCardList = (props) => {
  const { videos, onClick } = props;
  const videoCardList = videos.map((video, id) => (
    <VideoCard video={video} key={id} onClick={onClick} />
  ));
  return (
    <Grid container spacing={5}>
      {videoCardList}
    </Grid>
  );
};

export default VideoCardList;
