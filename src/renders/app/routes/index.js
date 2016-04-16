import React from "react";
import {Route, IndexRoute} from "react-router";
import LoginForm from "../components/LoginForm";
import RTCApp from "../components/RTCApp";
import {requireAuth} from "../middlewares";

export default (
    <Route path="/">
        <IndexRoute component={RTCApp} onEnter={requireAuth}/>
        <Route path="login" component={LoginForm}/>
    </Route>
)