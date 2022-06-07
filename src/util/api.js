import {_saveQuestion} from "./_DATA";

export function saveQuestion(optionOneText, optionTwoText, author) {
    return _saveQuestion({optionOneText, optionTwoText, author});
}
