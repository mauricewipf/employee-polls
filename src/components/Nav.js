import {Link} from "react-router-dom";
import {connect} from "react-redux";

const Nav = (props) => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/leaderboard">Leaderboard</Link>
                </li>
                <li>
                    <Link to="/new">New Tweet</Link>
                </li>
                <li>User: {props.authedUserId}</li>
                <li>
                    <Link to="/">Logout</Link>
                </li>
            </ul>
        </nav>
    );
};

const mapStateToProps = ({authedUser}) => ({
    authedUserId: authedUser.id,
});


export default connect(mapStateToProps)(Nav);
