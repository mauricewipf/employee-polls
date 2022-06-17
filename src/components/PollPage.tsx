import {connect} from "react-redux";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {handleAddAnswer} from "../actions/questions";
import "./PollPage.css";
import {User} from "../models/User";
import {Question} from "../models/Question";
import React, {FormEvent} from "react";
import {State} from "../models/State";

type Prop = {
    dispatch: any,
    authedUser: User,
    question: Question,
    author: User
};

const PollPage = ({dispatch, authedUser, question, author}: Prop) => {
    const navigate = useNavigate();

    if (!authedUser || !question || !author) {
        return <Navigate to="/404"/>;
    }

    const hasVotedForOptionOne = question.optionOne.votes.includes(authedUser.id);
    const hasVotedForOptionTwo = question.optionTwo.votes.includes(authedUser.id);
    const hasVoted = hasVotedForOptionOne || hasVotedForOptionTwo;

    const handleOptionOne = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(handleAddAnswer(question.id, "optionOne"));
        navigate("/");
    };

    const handleOptionTwo = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(handleAddAnswer(question.id, "optionTwo"));
        navigate("/");
    };

    const calcPercentage = (option: "optionOne" | "optionTwo", question: Question) => {
        const numberVotesTotal = question.optionOne.votes.length + question.optionTwo.votes.length;
        switch (option) {
            case "optionOne":
                return question.optionOne.votes.length / numberVotesTotal * 100 + " %";
            case "optionTwo":
                return question.optionTwo.votes.length / numberVotesTotal * 100 + " %";
            default:
                return "";
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mt-9">Poll by {author.id}</h1>

            <div className="flex justify-center">
                <img src={author.avatarURL} alt="Profile" className="h-24 w-24"/>
            </div>

            <div className="flex justify-center">
                <h2 className="text-2xl font-bold mt-6">Would you rather?</h2>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">

                <button onClick={handleOptionOne} disabled={hasVoted}
                        className={"p-2 rounded-xl bg-zinc-100 hover:shadow-xl transition " + (hasVotedForOptionOne ? "bg-lime-400" : "")}>
                    <div className={hasVotedForOptionOne ? "chosen" : ""}>
                        <p className="font-bold mb-2">{question.optionOne.text}</p>
                        {!hasVoted &&
                        <p className="underline underline-offset-4 mb-3">Click</p>
                        }
                        {hasVoted &&
                        <p className="text-xs">Votes: {question.optionOne.votes.length} ({calcPercentage("optionOne", question)})</p>
                        }
                    </div>
                </button>

                <button onClick={handleOptionTwo} disabled={hasVoted}
                        className={"p-2 rounded-xl bg-zinc-100 hover:shadow-xl transition " + (hasVotedForOptionTwo ? "bg-lime-400" : "")}>
                    <p className="font-bold mb-2">{question.optionTwo.text}</p>
                    {!hasVoted &&
                    <p className="underline underline-offset-4 mb-3">Click</p>
                    }
                    {hasVoted &&
                    <p className="text-xs">Votes: {question.optionTwo.votes.length} ({calcPercentage("optionTwo", question)})</p>
                    }
                </button>


            </div>


        </div>
    );
};

const mapStateToProps = ({authedUser, users, questions}: State) => {
    try {
        const question: Question | any = Object.values(questions).find((question) => question.id === useParams().id);
        const author: User | any = Object.values(users).find((user: User) => user.id === question.author);
        return {authedUser, question, author};
    } catch (e) {
        return undefined;
    }
};

export default connect(mapStateToProps)(PollPage);
