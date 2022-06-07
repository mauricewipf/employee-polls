import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {handleLogin} from "../actions/authedUser";

const Login = ({dispatch}) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsername = (e) => {
        const value = e.target.value;
        setUsername(value);
    };

    const handlePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleLogin(username, password));
        navigate("/");
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    value={username}
                    onChange={handleUsername}
                    type="text"
                    id="username"/>
                <br/>
                <label htmlFor="password">Password</label>
                <input
                    value={password}
                    onChange={handlePassword}
                    type="password"
                    id="password"/>
                <br/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default connect()(Login);
