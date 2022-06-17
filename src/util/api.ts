import {_getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer} from "./_DATA";
import {User} from "../models/User";
import {Question} from "../models/Question";

export function getInitialData(): Promise<{ users: { [key: string]: User }, questions: { [key: string]: Question } }> {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, questions]) => ({
        users,
        questions,
    }))
}

export function saveQuestion(optionOneText: string, optionTwoText: string, author: User): Promise<Question> {
    return _saveQuestion({optionOneText, optionTwoText, author});
}

export function saveQuestionAnswer(authedUserId: string, qid: string, answer: "optionOne" | "optionTwo") {
    return _saveQuestionAnswer({
        authedUser: authedUserId,
        qid,
        answer
    });
}
