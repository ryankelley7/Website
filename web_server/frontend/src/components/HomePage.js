import React, {Component } from "react";
import CreateRoomPage from "./CreateRoomPage";
import JoinRoomPage from "./JoinRoomPage";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";


export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path= '/'>
                        <p>This is the Home Page</p>
                    </Route>
                    <Route path= '/join' component={JoinRoomPage}/>
                    <Route path= '/create' component={CreateRoomPage}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

