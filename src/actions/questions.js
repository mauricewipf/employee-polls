import {saveQuestion} from "../util/api";

export const ADD_QUESTIONS = "ADD_QUESTIONS";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    };
}

function addQuestion(question) {
    return {
        type: ADD_QUESTIONS,
        question,
    };
}

export function handleAddQuestion(firstOption, secondOption) {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        return saveQuestion(firstOption, secondOption, authedUser)
            .then((question) => dispatch(addQuestion(question)))
    };
}
