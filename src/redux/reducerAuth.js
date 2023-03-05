//Action Type
import {authMeAPI} from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const RESET_STATE = 'RESET_STATE'


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}

let reducerAuth = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        case RESET_STATE:
            return {
                ...state,
                id: null,
                login: null,
                email: null,
                isAuth: false,
            }
        default:
            return state
    }
}


//Action Create
export const setAuthUserDataAC = (id, login, email) => ({type: SET_AUTH_USER_DATA, data: {id, login, email}})
export const resetAC = () => ({type: RESET_STATE})


//Thunk Create
export const getAuthMeTC = () => async (dispatch) => {
    let data = await authMeAPI.getAuthMe()

    if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setAuthUserDataAC(id, login, email))
    }
}

export const logInTC = (object, setStatus, setSubmitting) => async (dispatch) => {
    let data = await authMeAPI.postAuthLogin(object)
    if (data.resultCode === 0) {
        dispatch(getAuthMeTC())
    } else {
        setStatus(data.messages)
    }
    setSubmitting(false);
}

export const logOutTC = () => async (dispatch) => {
    await authMeAPI.deleteAuthLogin()
    dispatch(resetAC())
}
export default reducerAuth