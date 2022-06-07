import {saveQuestion} from "../util/api";

export const ADD_POLL = "ADD_POLL";

function addQuestion(question) {
    return {
        type: ADD_POLL,
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
