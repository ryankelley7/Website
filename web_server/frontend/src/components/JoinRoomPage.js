import React, { Component } from "react";
import { Button, Grid, Typography, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

export default class JoinRoomPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomCode: "",
            error: "",
        };
        this._handleTextFieldChange = this._handleTextFieldChange.bind(this);
        this._roomButtonPressed = this._roomButtonPressed.bind(this);
    }

    render() {
        return (
            <Grid container spacing={1} align="center">
                <Grid item xs={12}>
                    <Typography variant="h4" component="h4">
                        Join a Room
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        error={this.state.error}
                        label="Code"
                        placeholder="Enter a Room Code"
                        value={this.state.roomCode}
                        helperText={this.state.error}
                        variant="outlined"
                        onChange={this._handleTextFieldChange}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this._roomButtonPressed}
                    >
                        Enter Room
                    </Button>
                </Grid>

                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="secondary"
                        to="/"
                        component={Link}
                    >
                        Back
                    </Button>
                </Grid>
            </Grid>
        );
    }

    _handleTextFieldChange(e) {
        this.setState({
            roomCode: e.target.value,
        });
    }

    _roomButtonPressed() {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                code: this.state.roomCode,
            }),
        };
        fetch("/api/join-room", requestOptions)
            .then((response) => {
                if (response.ok) {
                    this.props.history.push(`/room/${this.state.roomCode}`);
                } else {
                    this.setState({ error: "Room Not Found." });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
}
