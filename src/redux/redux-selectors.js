import {createSelector} from "reselect";

export const getUsers = (state) => {
    return state.usersPage.users
}
export const getUsersSelector = createSelector(getUsers,(users)=> {
    return users.filter((e)=>{return e})
})
export const getTotalCount = (state) => {
    return state.usersPage.totalCount
}
export const getCount = (state) => {
    return state.usersPage.count
}
export const getPage= (state) => {
    return state.usersPage.page
}
export const getIsFetching= (state) => {
    return state.usersPage.isFetching
}
export const getFollowingProcessOnUsers= (state) => {
    return state.usersPage.followingProcessOnUsers
}
export const getIsAuth= (state) => {
    return state.auth.isAuth
}