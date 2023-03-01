//Action Type
import {authMeAPI} from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const NOT_AUTH = 'NOT_AUTH'
const GO_OUT = 'GO_OUT'



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
        case GO_OUT: {
            return {
                ...state,
                id: null,
                login: null,
                email: null,
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
export const goOutAC = () => ({type: GO_OUT})



//Thunk Create
export const getAuthMeTC = () => {
    return (dispatch) => {
        authMeAPI.getAuthMe()
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
export const authLoginTC = (object) => {
    return (dispatch) => {
        authMeAPI.postAuthLogin(object)
            .then((data) => {
                dispatch(getAuthMeTC())
            })
    }
}
export const authOutLoginTC = (object) => {
    return (dispatch) => {

        authMeAPI.deleteAuthLogin(object)
            .then((data) => {
                dispatch(goOutAC())
                console.log(data)

            })
    }
}
export default reducerAuth