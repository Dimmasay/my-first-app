//Action Type

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'


//Starting value state
let initialState = {
    users: [],
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
            return {...state, users: [...state.users, ...action.userList]}
            // return {...state, users: [ ...action.userList]}

        default:
            return state
    }

}

//Action Creator

export const followAC = (userId) => {
    return {type: FOLLOW, id: userId}
}
export const unfollowAC = (userId) => {
    return {type: UNFOLLOW, id: userId}
}

export const setUsersAC = (users) => {
    return {type: SET_USERS, userList: users}
}
export default reducerUsers