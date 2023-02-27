import {usersAPI as userAPI} from "../api/api";

//Action Type
const SET_MY_FOLLOWERS = 'SET_MY_FOLLOWERS'
const SET_TOTAL_COUNT_FOLLOWERS = 'SET_TOTAL_COUNT_FOLLOWERS'
const SET_PAGE_COUNT = 'SET_PAGE_COUNT'


let initialState = {
    followers : [],
    totalCount: 0,
    page : 1,
    count: 7

}

let reducerFriends = (state = initialState, action) => {
    switch (action.type) {
        case SET_MY_FOLLOWERS:
            return {
            ...state,
                followers: action.followers
        }
        case SET_TOTAL_COUNT_FOLLOWERS:
            return {
            ...state,
                totalCount: action.totalCount
        }
        case SET_PAGE_COUNT:
            return {
            ...state,
                page: action.page,

        }
        default:
            return state
    }
}


//Action Create
export const setMyFollowersAC = (value) => ({type: SET_MY_FOLLOWERS, followers: value})
export const setTotalCountFollowersAC = (value) => ({type: SET_TOTAL_COUNT_FOLLOWERS, totalCount: value})
export const setPageAC = (value) => ({type: SET_PAGE_COUNT, page: value })

//Thunk Create
export  const setMyFollowersTC = (count, page) =>{
    return (dispatch) => {
        userAPI.getMyFollowers(count,page)
            .then((data)=>{
                dispatch(setMyFollowersAC(data.items))
                dispatch(setTotalCountFollowersAC(data.totalCount))
            })
    }
}
export  const setCurrentPageTC = (count, page) =>{
    return (dispatch) => {
        dispatch(setPageAC(page))
        userAPI.getMyFollowers(count,page)
            .then((data)=>{
                dispatch(setMyFollowersAC(data.items))
            })
    }
}
export default reducerFriends