import {Link} from "react-router-dom";

const Nav = () => {
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
                <li>
                    <Link to="/">Logout</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
