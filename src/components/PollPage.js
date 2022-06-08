import {connect} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {handleAddAnswer} from "../actions/questions";

const PollPage = ({dispatch, user, question}) => {
    const navigate = useNavigate();

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

    return (
        <div>
            <h1>Poll by {user.id}</h1>
            <img src={user.avatarURL} alt="Profile" className="profile-image"/>

            <h2>Would you rather?</h2>

            <p>{question.optionOne.text}</p>
            <button onClick={handleOptionOne}>Click</button>

            <p>{question.optionTwo.text}</p>
            <button onClick={handleOptionTwo}>Click</button>
        </div>
    );
}

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
