import {connect} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {handleAddAnswer} from "../actions/questions";
import "./PollPage.css";

const PollPage = ({dispatch, authedUser, question, author}) => {
    const navigate = useNavigate();

    const hasVotedForOptionOne = question.optionOne.votes.includes(authedUser.id);
    const hasVotedForOptionTwo = question.optionTwo.votes.includes(authedUser.id);
    const hasVoted = hasVotedForOptionOne || hasVotedForOptionTwo;

    const handleOptionOne = (e) => {
        e.preventDefault();
        dispatch(handleAddAnswer(question.id, "optionOne"));
        navigate("/");
    }

    const handleOptionTwo = (e) => {
        e.preventDefault();
        dispatch(handleAddAnswer(question.id, "optionTwo"));
        navigate("/");
    }

    const calcPercentage = (option, question) => {
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
            <h1>Poll by {author.id}</h1>
            <img src={author.avatarURL} alt="Profile" className="profile-image"/>

            <h2>Would you rather?</h2>

            <div className={hasVotedForOptionOne ? "chosen" : ""}>
                <p>{question.optionOne.text}</p>
                <button onClick={handleOptionOne} disabled={hasVoted}>Click</button>
                {
                    hasVoted
                    ? <p>Votes: {question.optionOne.votes.length} ({calcPercentage("optionOne", question)})</p>
                    : null
                }
            </div>

            <div className={hasVotedForOptionTwo ? "chosen" : ""}>
                <p>{question.optionTwo.text}</p>
                <button onClick={handleOptionTwo} disabled={hasVoted}>Click</button>
                {
                    hasVoted
                        ? <p>Votes: {question.optionTwo.votes.length} ({calcPercentage("optionTwo", question)})</p>
                        : null
                }
            </div>
        </div>
    );
}

const mapStateToProps = ({authedUser, users, questions}) => {
    try {
        const question = Object.values(questions).find((question) => question.id === useParams().id);
        const author = Object.values(users).find((user) => user.id === question.author);
        return {authedUser, question, author};
    } catch (e) {
        throw new Error(`Question or user is not found.\n ${e}`);
    }
};

export default connect(mapStateToProps)(PollPage);
