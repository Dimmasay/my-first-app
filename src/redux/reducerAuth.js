//Action Type
import {getAuthMe} from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const NOT_AUTH = 'NOT_AUTH'


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: true,
}

let reducerAuth = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        }
        case NOT_AUTH: {
            return {
                ...state,
                isAuth: false,
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
export const setNotAuthAC = () => ({type: NOT_AUTH})




//Thunk Create
export const getAuthMeTC = () => {
    return (dispatch) => {
        getAuthMe()
            .then((data) => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setAuthUserDataAC(id, login, email))
                } else if (data.resultCode === 1) {
                        dispatch(setNotAuthAC())
                }
            })
    }
}
export default reducerAuth