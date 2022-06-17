export interface Question {
    id: string;
    author: string
    timestamp: number;
    optionOne: {
        votes: string[];
        text: string;
    },
    optionTwo: {
        votes: string[];
        text: string;
    }
}
