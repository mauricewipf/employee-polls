export const SET_AUTHED_USER = "SET_AUTHED_USER";

export function setAuthedUser(id) {
    return {
        type: SET_AUTHED_USER,
        id,
    };
}

export function handleLogin(username, password) {
    return (dispatch, getState) => {
        const { users } = getState();

        const user = Object.values(users).find((user) => user.id === username && user.password === password);

        if (!!user) {
            return dispatch(setAuthedUser(user));
        }
    };
}
