import React from "react";
import {Grid} from "@material-ui/core";


import youtube from "./api/youtube";

import {SearchBar, VideoDetail, VideoList} from "./components";

class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null,
    }

    componentDidMount() {
        this.handleFormSubmit('JavaScript');
    }

    handleFormSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
                params: {
                    part: 'snippet',
                    maxResult: 5,
                    key: 'AIzaSyBlhAi639CHOfZMbi-wrSVlnqoN5CxYWA0',
                    q: searchTerm,
                }
            }
        );

        this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
    }

    handleSelectedVideo = (video) => {
        this.setState({selectedVideo: video});
    }

    render() {
        const {videos, selectedVideo} = this.state;
        return (
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleFormSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail video={selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos={videos} onSelect={this.handleSelectedVideo}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }

}

export default App;

