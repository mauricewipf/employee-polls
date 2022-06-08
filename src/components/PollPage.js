import {connect} from "react-redux";
import {useParams} from "react-router-dom";

const PollPage = ({user, question}) => {

    return (
        <div>
            <h1>Poll by {user.id}</h1>
            <img src={user.avatarURL} alt="Profile image" className="profile-image"/>

            <h2>Would you rather?</h2>

            <p>{question.optionOne.text}</p>
            <button>Click</button>

            <p>{question.optionTwo.text}</p>
            <button>Click</button>
        </div>
    );
}

const initRequiredData = (users, questions, questionId) => {
    try {
        const question = Object.values(questions).find((question) => question.id === questionId);
        const author = question.author;
        const user = Object.values(users).find((user) => user.id === author);
        return {question, user};
    } catch (e) {
        throw new Error(`Question or user is not found.\n ${e}`);
    }
};

const mapStateToProps = ({users, questions}) => {
    try {
        const question = Object.values(questions).find((question) => question.id === useParams().id);
        const author = question.author;
        const user = Object.values(users).find((user) => user.id === author);
        return {question, user};
    } catch (e) {
        throw new Error(`Question or user is not found.\n ${e}`);
    }
};

export default connect(mapStateToProps)(PollPage);
