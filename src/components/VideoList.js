import React from "react";
import VideoItem from "./VideoItem";

import {Grid} from "@material-ui/core";

const VideoList = ({videos, onSelect}) => {
    const videoList = videos.map((video, id) =>
        <VideoItem video={video} key={id} onSelect={onSelect}/>
    );

    return (
        <Grid container spacing={5}>
            {videoList}
        </Grid>
    );

}

export default VideoList;