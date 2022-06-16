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
            <h1 className="text-3xl font-bold mt-9" data-testid="login-heading">Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-slate-700">Username</label>
                    <div className="mt-1">
                        <input
                            value={username}
                            onChange={handleUsername}
                            type="text"
                            name="username"
                            id="username"
                            className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"/>
                    </div>
                </div>
                <div className="mt-6">
                    <label htmlFor="password" className="block text-sm font-medium text-slate-700">Password</label>
                    <div className="mt-1">
                        <input
                            value={password}
                            onChange={handlePassword}
                            type="password"
                            name="password"
                            id="password"
                            className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"/>
                    </div>
                </div>
                <div className="mt-6 text-right">
                    <button type="submit"
                            className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}

export default connect()(Login);
