import React, {useEffect} from 'react';
import './App.css';
import Nav from "./components/Nav";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import NewPoll from "./components/NewPoll";
import PollPage from "./components/PollPage";
import {connect} from "react-redux";
import Login from "./components/Login";
import {handleInitialData} from "./actions/shared";
import Leaderboard from "./components/Leaderboard";

function App(props) {
    useEffect(() => {
        props.dispatch(handleInitialData());
    }, []);

  return (
    <div className="container">
        {
            !props.loggedIn
            ? <Login/>
            : <>
                <Nav/>
                <Routes>
                    <Route path="/" exact element={<Dashboard />} />
                    <Route path="/leaderboard" exact element={<Leaderboard />} />
                    <Route path="/questions/:id" element={<PollPage />} />
                    <Route path="/new" exact element={<NewPoll />} />
                </Routes>
            </>
        }
    </div>
  );
}

const mapStateToProps = ({authedUser}) => ({
    loggedIn: !!authedUser,
});

export default connect(mapStateToProps)(App);
