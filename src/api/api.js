import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b2f42c92-a12d-4024-aa96-79bbcb29ee47"
    }

})

export const usersAPI = {
    getUsers: (count, page = 1) => {
        return instance.get(`users?count=${count}&page=${page}`)
            .then((response) => {
                return response.data
            })
    },
    getMyFollowers: (count, page) => {
        return instance.get(`users?friend=true&count=${count}&page=${page}`)
            .then((response) => {
                return response.data
            })
    },
    unFollowUser: (userId) => {
        return instance.post(`follow/${userId}`)
            .then((response) => {
                return response.data
            })
    },
    followUser: (userId) => {
        return instance.delete(`follow/${userId}`)
            .then((response) => {
                return response.data
            })
    },


}
export const profileAPI = {
    getProfileUser: (userId) => {
         return instance.get(`/profile/${userId}`)
    },

}
export const getAuthMe = () => {
    return instance.get(`auth/me`)
        .then((response) => {

            return response.data

        })
}
