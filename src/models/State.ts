import {User} from "./User";
import {Question} from "./Question";

export interface State {
    authedUser: User;
    users: { [key: string]: User };
    questions: { [key: string]: Question };
}
