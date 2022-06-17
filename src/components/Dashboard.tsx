import {connect} from "react-redux";
import Card from "./Card";
import {State} from "../models/State";
import {Question} from "../models/Question";
import React from "react";
import {User} from "../models/User";

type Prop = {
    authedUser: User;
    questions: Question[];
    users: { [key: string]: User };
}
const Dashboard = ({authedUser, questions, users}: Prop) => {

    const unanswered = (question: Question) => (!question.optionOne.votes.includes(authedUser.id)
        && !question.optionTwo.votes.includes(authedUser.id));

    const answered = (question: Question) => (question.optionOne.votes.includes(authedUser.id)
        || question.optionTwo.votes.includes(authedUser.id));

    return (
        <div>
            <h1 className="text-3xl font-bold mt-9" data-testid="heading">Dashboard</h1>

            <h2 className="text-2xl font-bold mt-6">New Questions</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {questions
                    .filter(unanswered)
                    .map((question) => (
                        <li key={question.id}>
                            <Card question={question} author={users[question.author]}/>
                        </li>
                    ))}
            </ul>

            <h2 className="text-2xl font-bold mt-6">Answered Questions</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {questions
                    .filter(answered)
                    .map((question) => (
                        <li key={question.id}>
                            <Card question={question} author={users[question.author]}/>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

const mapStateToProps = ({authedUser, questions, users}: State) => ({
    authedUser,
    questions: Object.values(questions).sort(
        (a, b) => b.timestamp - a.timestamp
    ),
    users,
});

export default connect(mapStateToProps)(Dashboard);
