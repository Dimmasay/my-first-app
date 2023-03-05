//Action Type
import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST'
const DELETE_POST = 'DELETE_POST'
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
    status: ''
}

//Reducer
const reducerProfile = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts,
                    {
                        message: action.post,
                        like: 0,
                        id: 4,
                    }
                ]
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
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
export const addPostAC = (text) => ({type: ADD_POST, post: text})
export const deletePostAC = (id) => ({type: DELETE_POST, postId: id})
export const setUserProfileAC = (user) => ({type: SET_USER, currentUser: user})
export const setStatusAC = (status) => ({type: SET_STATUS, status: status})

//Thunk Creator
export const getProfileUserTC = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfileUser(userId)
    dispatch(setUserProfileAC(response.data))
}
export const getStatusTC = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatusAC(response.data))
}
export const updateStatusTC = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatusAC(status))
    }
}

export default reducerProfile