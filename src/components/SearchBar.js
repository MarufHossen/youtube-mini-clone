import React from "react";
import {Paper, TextField} from "@material-ui/core";
import youtube from "../api/youtube";

class SearchBar extends React.Component {

    state = {
        searchTerm: '',
    }

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({searchTerm: event.target.value});
    }

    handleSubmit = (event) => {
        const {searchTerm} = this.state;
        const {onFormSubmit} = this.props;

        onFormSubmit(searchTerm);

        event.preventDefault();

    }

    render() {
        return (
            <Paper elevation={6} style={{padding: 10}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search.." onChange={this.handleChange} />
                </form>
            </Paper>
        );
    }

}

export default SearchBar;