//Action Type
import {profileAPI} from "../api/api";

const ADD_POST = '/reducerProfile/ADD_POST'
const DELETE_POST = '/reducerProfile/DELETE_POST'
const SET_USER = '/reducerProfile/SET_USER'
const SET_STATUS = '/reducerProfile/SET_STATUS'
const SAVE_PHOTOS_SUCCESS = '/reducerProfile/SAVE_PHOTOS_SUCCESS'


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
        case SAVE_PHOTOS_SUCCESS:
            return {...state, user: {...state.user, photos:action.photos}}

        default:
            return state
    }
}

//Action Creator
export const addPostAC = (text) => ({type: ADD_POST, post: text})
export const deletePostAC = (id) => ({type: DELETE_POST, postId: id})
export const setUserProfileAC = (user) => ({type: SET_USER, currentUser: user})
export const setStatusAC = (status) => ({type: SET_STATUS, status: status})
export const savePhotosSuccess = (photos) => ({type: SAVE_PHOTOS_SUCCESS, photos})

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
export const updatePhotoTC = (file) => async (dispatch) => {
    let response = await profileAPI.updatePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotosSuccess(response.data.data.photos))
    }
}
export const updateProfileTC = (profile, setStatus) => async (dispatch) => {
    let response = await profileAPI.updateProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getProfileUserTC(profile.userId))
    } else {
        setStatus(response.data.messages)
        return Promise.reject(response.data.messages)
    }
}

export default reducerProfile