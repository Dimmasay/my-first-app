//Action Type
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}

let reducerAuth = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...state.isAuth = true,
                ...action.data,
            }
        }
        default:
            return state
    }
}


//Action Create
export const setAuthUserDataAC = (id, login, email) => {
    return {type: SET_AUTH_USER_DATA, data: {id, login, email}}
}
export default reducerAuth