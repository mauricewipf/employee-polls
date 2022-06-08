import {receiveUsers} from "./users";
import {receiveQuestions} from "./questions";
import {getInitialData} from "../util/api";
import {setAuthedUser} from "./authedUser";

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData().then(({ users, questions }) => {
            dispatch(setAuthedUser(JSON.parse(sessionStorage.getItem("authedUser"))));
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
        });
    };
}
