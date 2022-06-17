import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {State} from "../models/State";
import React from "react";

type Prop = {
    children: any,
    loggedIn: boolean
}
const PrivateRoute = ({children, loggedIn}: Prop) => {
    const redirectUrl = window.location.href.toString().split(window.location.host)[1];

    return loggedIn ? children : <Navigate to={`/login?redirectTo=${redirectUrl}`}/>;
};

const mapStateToProps = ({authedUser}: State) => ({
    loggedIn: !!authedUser,
});

export default connect(mapStateToProps)(PrivateRoute);
