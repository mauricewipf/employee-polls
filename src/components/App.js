import React, {useEffect} from 'react';
import './App.css';
import Nav from "./Nav";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import NewPoll from "./NewPoll";
import PollPage from "./PollPage";
import {connect} from "react-redux";
import Login from "./Login";
import {handleInitialData} from "../actions/shared";
import Leaderboard from "./Leaderboard";
import Error404 from "./404";
import PrivateRoute from "./PrivateRoute";

function App({dispatch, loggedIn}) {
    useEffect(() => {
        dispatch(handleInitialData());
    });

    return (
        <div className="container mx-auto py-4">
            {loggedIn && <Nav/>}
            <Routes>
                <Route path="/login" exact element={<Login/>}/>
                <Route path="/" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
                <Route path="/leaderboard" exact element={<PrivateRoute><Leaderboard/></PrivateRoute>}/>
                <Route path="/questions/:id" element={<PrivateRoute><PollPage/></PrivateRoute>}/>
                <Route path="/new" exact element={<PrivateRoute><NewPoll/></PrivateRoute>}/>
                <Route path="/404" exact element={<Error404/>}/>
            </Routes>
        </div>
    );
}

const mapStateToProps = ({authedUser}) => ({
    loggedIn: !!authedUser,
});

export default connect(mapStateToProps)(App);
