export const LOGIN = 'LOGIN';

export const loginUser = (user) => ({
    type: LOGIN,
    payload: user,
});