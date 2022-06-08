import {connect} from "react-redux";

const Dashboard = (props) => {
    return (
        <div>
            <h1>Dashboard</h1>

            <h2>New Questions</h2>
            <ul>
                {Object.values(props.questions)
                    .filter((question) => true) // TODO
                    .map((question) => (
                    <li key={question.id}>
                        {question.id}
                    </li>
                ))}
            </ul>

            <h2>Answered Questions</h2>
            <ul>
                {Object.values(props.questions)
                    .filter((question) => true) // TODO
                    .map((question) => (
                    <li key={question.id}>
                        {question.id}
                    </li>
                ))}
            </ul>
        </div>
    );
}

const mapStateToProps = ({questions}) => ({
    questions,
});

export default connect(mapStateToProps)(Dashboard);
