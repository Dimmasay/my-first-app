//Action Type
import {getAuthMe} from "../api/api";

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
            let copy = {...state,
                ...action.data,
                isAuth : true,}
            return copy
        }
        default:
            return state
    }
}


//Action Create
export const setAuthUserDataAC = (id, login, email) => {return {type: SET_AUTH_USER_DATA, data: {id, login, email}}}


//Thunk Create
export const getAuthMeTC = () => {
    return (dispatch) => {
        getAuthMe()
            .then((data) => {
                let {id, login, email} = data.data
                dispatch(setAuthUserDataAC(id, login, email))
            })
    }
}
export default reducerAuth