//Action Types
import {usersAPI, usersAPI as userAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const FOLLOWING_PROCESS = 'FOLLOWING_PROCESS'


//Starting value state
let initialState = {
    users: [],
    //Total items
    totalCount: 0,
    //Items on current page
    count: 10,
    //Current page
    page: 1,

    isFetching: true,

    followingProcessOnUsers: [],


}

//Reducer
const reducerUsers = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.id) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case UNFOLLOW:

            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.id) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS:
            return {...state, users: action.userList}


        case SET_CURRENT_PAGE:
            return {...state, page: action.currentPage}

        case SET_TOTAL_COUNT:
            return {...state, totalCount: action.itemsList}

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetchingValue}

        case FOLLOWING_PROCESS:
            return {
                ...state,
                followingProcessOnUsers:
                    action.status
                        ? [...state.followingProcessOnUsers, action.id]
                        : [state.followingProcessOnUsers.filter((id) => {
                            return (id === !action.id)
                        })]
            }

        default:
            return state
    }
}

//Action Creators
export const followAC = (userId) => {return {type: FOLLOW, id: userId}}
export const unfollowAC = (userId) => ({type: UNFOLLOW, id: userId})
export const setUsersAC = (users) => ({type: SET_USERS, userList: users})
export const setCurrentPageAC = (page) => ({type: SET_CURRENT_PAGE, currentPage: page})
export const setTotalCountAC = (items) => ({type: SET_TOTAL_COUNT, itemsList: items})
export const isFetchingToggleAC = (toggle) => ({type: TOGGLE_IS_FETCHING, isFetchingValue: toggle})
export const followProcessAC = (value, userId) => ({type: FOLLOWING_PROCESS, status: value, id: userId})


//Thunk Creators
export const setUsersTC = (count, page) => {
    return (dispatch) => {
        dispatch(isFetchingToggleAC(true))
        userAPI.getUsers(count, page)
            .then((data) => {
                dispatch(setUsersAC(data.items))
                dispatch(setTotalCountAC(data.totalCount))
                dispatch(isFetchingToggleAC(false))
            })
    }
}
export const setPageTC = (count, page) => {
    return (dispatch) => {
        dispatch(setCurrentPageAC(page))
        dispatch(isFetchingToggleAC(true))
        userAPI.getUsers(count, page)
            .then((data) => {
                dispatch(setUsersAC(data.items))
                dispatch(isFetchingToggleAC(false))
            })
    }
}
export const followUserTC = (userId) =>{
    return (dispatch) => {
        dispatch(followProcessAC(true, userId))
        usersAPI.followUser(userId)
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(unfollowAC(userId))
                }
                dispatch(followProcessAC(false, userId))
            })
    }
}
export const unFollowUserTC = (userId) =>{
    return (dispatch) => {
        dispatch(followProcessAC(true, userId))
        usersAPI.unFollowUser(userId)
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(followAC(userId))
                }
                dispatch(followProcessAC(false, userId))
            })
    }
}

export default reducerUsers
