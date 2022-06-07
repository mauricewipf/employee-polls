import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {handleAddQuestion} from "../actions/questions";

const NewPoll = ({dispatch}) => {
    const navigate = useNavigate();
    const [firstOption, setFirstOption] = useState("");
    const [secondOption, setSecondOption] = useState("");

    const handleFirstOptionChange = (e) => {
        const value = e.target.value;
        setFirstOption(value);
    };

    const handleSecondOptionChange = (e) => {
        const value = e.target.value;
        setSecondOption(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleAddQuestion(firstOption, secondOption));
        navigate("/");
    };

    return (
        <div>
            <h1>New Poll</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstOption">First Option</label>
                <input
                    value={firstOption}
                    onChange={handleFirstOptionChange}
                    type="text"
                    id="firstOption"/>
                <br/>
                <label htmlFor="secondOption">Second Option</label>
                <input
                    value={secondOption}
                    onChange={handleSecondOptionChange}
                    type="text"
                    id="secondOption"/>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default connect()(NewPoll);
