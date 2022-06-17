import {receiveUsers} from "./users";
import {receiveQuestions} from "./questions";
import {getInitialData} from "../util/api";
import {User} from "../models/User";
import {Question} from "../models/Question";

export function handleInitialData() {
    return (dispatch: any) => {
        return getInitialData().then(({users, questions}:
                                          { users: { [key: string]: User }, questions: { [key: string]: Question } }) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
        });
    };
}
