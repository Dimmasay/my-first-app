//Action Types
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'


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


        default:
            return state
    }
}

//Action Creators
export const followAC = (userId) => {
    return {type: FOLLOW, id: userId}
}
export const unfollowAC = (userId) => {
    return {type: UNFOLLOW, id: userId}
}
export const setUsersAC = (users) => {
    return {type: SET_USERS, userList: users}
}
export const setCurrentPageAC = (page) => {
    return {type: SET_CURRENT_PAGE, currentPage: page}
}
export const setTotalCountAC = (items) => {
    return {type: SET_TOTAL_COUNT, itemsList: items}
}
export const isFetchingToggleAC = (toggle) => {
    return {type: TOGGLE_IS_FETCHING, isFetchingValue: toggle}
}


export default reducerUsers
