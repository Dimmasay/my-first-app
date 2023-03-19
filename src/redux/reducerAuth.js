//Action Type
import {authMeAPI, securityAPI} from "../api/api";

const SET_AUTH_USER_DATA = '/reducerAuth/SET_AUTH_USER_DATA'
const RESET_STATE = '/reducerAuth/RESET_STATE'
const SET_CAPTCHA = '/reducerAuth/SET_CAPTCHA'


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captcha: null
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
                captcha: null,
            }
            case SET_CAPTCHA:
            return {
                ...state,
                captcha: action.captchaUrl
            }
        default:
            return state
    }
}


//Action Create
export const setAuthUserDataAC = (id, login, email) => ({type: SET_AUTH_USER_DATA, data: {id, login, email}})
export const resetAC = () => ({type: RESET_STATE})
export const setCaptchaAC = (captchaUrl) => ({type: SET_CAPTCHA, captchaUrl})


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
        if(data.resultCode === 10){
            dispatch(getCaptchaTC())
        }
        setStatus(data.messages)
    }
    setSubmitting(false);
}

export const logOutTC = () => async (dispatch) => {
    await authMeAPI.deleteAuthLogin()
    dispatch(resetAC())
}

export const getCaptchaTC = () =>  async (dispatch) => {
    let captcha = await securityAPI.getCaptcha()
    dispatch(setCaptchaAC(captcha))
}

export default reducerAuth