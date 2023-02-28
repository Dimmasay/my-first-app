//Action Type
import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST'
const CURRENT_TEXT_POST = 'CURRENT_TEXT_POST'
const SET_USER = 'SET_USER'
const SET_STATUS = 'SET_STATUS'


//Starting value state
let initialState = {
    user: null,
    posts: [
        {message: 'Hi, how are you?', like: 15, id: 1},
        {message: 'Happy birthday!!!', like: 15, id: 2},
        {message: 'It`s my first post', like: 3, id: 3},
    ],
    newPostText: '',
    status: ''
}

//Reducer
const reducerProfile = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                message: state.newPostText,
                like: 0,
                id: 4,
            };
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = '';
            return stateCopy
        }
        case CURRENT_TEXT_POST: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.text
            return stateCopy
        }
        case SET_USER:
            return {...state, user: action.currentUser}
        case SET_STATUS:
            return {...state, status: action.status}

        default:
            return state
    }
}

//Action Creator
export const addPostCreator = () => ({type: ADD_POST})
export const currentTextPostCreator = (text) => ({type: CURRENT_TEXT_POST, text: text})
export const setUserProfileAC = (user) => ({type: SET_USER, currentUser: user})
export const setStatusAC = (status) => ({type: SET_STATUS, status: status})

//Thunk Creator
export const getProfileUserTC = (userId) => {
    return (dispatch) => {
        profileAPI.getProfileUser(userId)
            .then((response) => {
                dispatch(setUserProfileAC(response.data))
            })
    }
}
export const getStatusTC = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then((response) => {
                dispatch(setStatusAC(response.data))
            })
    }
}
export const updateStatusTC = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatusAC(status))
                }
            })
    }
}


export default reducerProfile