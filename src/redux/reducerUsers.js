import {usersAPI, usersAPI as userAPI} from "../api/api";


//Action Types
const FOLLOW_UNFOLLOW = '/reducerUsers/FOLLOW_UNFOLLOW'
// const FOLLOW = '/reducerUsers/FOLLOW'
// const UNFOLLOW = '/reducerUsers/UNFOLLOW'
const SET_USERS = '/reducerUsers/SET_USERS'
const SET_TOTAL_COUNT = '/reducerUsers/SET_TOTAL_COUNT'
const SET_CURRENT_PAGE = '/reducerUsers/SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = '/reducerUsers/TOGGLE_IS_FETCHING'
const FOLLOWING_PROCESS = '/reducerUsers/FOLLOWING_PROCESS'


//Starting value state
let initialState = {
    users: [],         //Total items
    totalCount: 0,     //Items on current page
    count: 10,         //Current page
    page: 1,
    isFetching: true,
    followingProcessOnUsers: [],
}

//Reducer
const reducerUsers = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.id) {
                        return {...user, followed: action.process}
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
                        : [state.followingProcessOnUsers.filter(id => id !== action.id)]
            }
        default:
            return state
    }
}

//Action Creators
export const followUnfollowAC = (userId, type) => ({type: FOLLOW_UNFOLLOW, id: userId, process: type})
export const setCurrentPageAC = (page) => ({type: SET_CURRENT_PAGE, currentPage: page})
export const setTotalCountAC = (items) => ({type: SET_TOTAL_COUNT, itemsList: items})
export const isFetchingToggleAC = (toggle) => ({type: TOGGLE_IS_FETCHING, isFetchingValue: toggle})
export const followProcessAC = (value, userId) => ({type: FOLLOWING_PROCESS, status: value, id: userId})
export const setUsersAC = (users) => ({type: SET_USERS, userList: users})


//Thunk Creators
export const setUsersTC = (count, page) => async (dispatch) => {
    dispatch(isFetchingToggleAC(true))

    let data = await userAPI.getUsers(count, page)
    dispatch(setUsersAC(data.items))
    dispatch(setTotalCountAC(data.totalCount))
    dispatch(isFetchingToggleAC(false))
}


export const setPageTC = (count, page) => async (dispatch) => {
    dispatch(setCurrentPageAC(page))
    dispatch(isFetchingToggleAC(true))
    let data = await userAPI.getUsers(count, page)

    dispatch(setUsersAC(data.items))
    dispatch(isFetchingToggleAC(false))
}

export const followUserTC = (userId) => async (dispatch) => {
    dispatch(followProcessAC(true, userId))
    let data = await usersAPI.followUser(userId)

    data.resultCode === 0 && dispatch(followUnfollowAC(userId, false))
    dispatch(followProcessAC(false, userId))

}

export const unFollowUserTC = (userId) => async (dispatch) => {
    dispatch(followProcessAC(true, userId))

    let data = await usersAPI.unFollowUser(userId)
    data.resultCode === 0 && dispatch(followUnfollowAC(userId, true))
    dispatch(followProcessAC(false, userId))

}


export default reducerUsers
