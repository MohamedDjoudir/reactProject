const authReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_LOGIN':
            return {...state, isLoggedin: true, user: action.payload.user, token: action.payload.access_token};
        case 'LOGOUT':
            localStorage.removeItem('state')
            return {...state, isLoggedin: false, user: {}, token: ''};
        case 'UPDATE_USER':
            return {...state, user: action.payload.user};
        case 'CHANGE_USER_STATUS':
            return {...state, user: action.payload.user};
        default:
            return state;
    }
};
export default authReducer;