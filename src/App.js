import React from 'react';
import './App.css';
import Nav from "./components/Nav";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import NewPoll from "./components/NewPoll";
import PollPage from "./components/PollPage";
import {connect} from "react-redux";

function App() {
  return (
    <div className="container">
        <Nav/>
        <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/questions/:id" element={<PollPage />} />
            <Route path="/new" exact element={<NewPoll />} />
        </Routes>
    </div>
  );
}

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps)(App);
