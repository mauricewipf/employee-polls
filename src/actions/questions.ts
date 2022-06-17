import {saveQuestion, saveQuestionAnswer} from "../util/api";
import {addAnswerUser, addQuestionUser} from "./users";
import {Question} from "../models/Question";

export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER_QUESTION = "ADD_ANSWER_QUESTION";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

export function receiveQuestions(questions: { [key: string]: Question }) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    };
}

function addQuestion(question: Question) {
    return {
        type: ADD_QUESTION,
        question,
    };
}

function addAnswerQuestion(author: string, qid: string, answer: string) {
    return {
        type: ADD_ANSWER_QUESTION,
        author,
        qid,
        answer,
    };
}

export function handleAddQuestion(firstOption: string, secondOption: string) {
    return (dispatch: any, getState: any) => {
        const {authedUser} = getState();

        return saveQuestion(firstOption, secondOption, authedUser)
            .then((question: Question) => {
                dispatch(addQuestion(question));
                dispatch(addQuestionUser(question))
            })
    };
}

export function handleAddAnswer(questionId: string, answer: "optionOne" | "optionTwo") {
    return (dispatch: any, getState: any) => {
        const {authedUser} = getState();
        return saveQuestionAnswer(authedUser.id, questionId, answer)
            .then(() => {
                dispatch(addAnswerQuestion(authedUser.id, questionId, answer));
                dispatch(addAnswerUser(authedUser.id, questionId, answer));
            });
    };
}
