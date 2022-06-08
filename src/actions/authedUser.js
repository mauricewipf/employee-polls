export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOGOUT_AUTHED_USER = "LOGOUT_AUTHED_USER";

export function setAuthedUser(authedUser) {
    return {
        type: SET_AUTHED_USER,
        authedUser,
    };
}

export function logoutAuthedUser() {
    return {
        type: LOGOUT_AUTHED_USER,
    };
}

export function handleLogin(username, password) {
    return (dispatch, getState) => {
        const { users } = getState();

        const user = Object.values(users).find((user) => user.id === username && user.password === password);

        if (!!user) {
            sessionStorage.setItem("authedUser", JSON.stringify(user));
            return dispatch(setAuthedUser(user));
        }
    };
}

export function handleLogout() {
    return (dispatch) => {
        sessionStorage.removeItem("authedUser");
        return dispatch(logoutAuthedUser());
    }
}
