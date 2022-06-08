import {connect} from "react-redux";
import './Card.css';
import {Link} from "react-router-dom";

const Card = ({question}) => {
    return (
        <div className="card-container">
            <h3>{question.author}</h3>
            <p>{new Date(question.timestamp).toDateString()}</p>
            <Link to={'questions/' + question.id}>Show</Link>
        </div>
    );
}

export default connect()(Card);
