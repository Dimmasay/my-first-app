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
    getStatus: (userId) => {
        return instance.get(`/profile/status/${userId}`)

    },
    updateStatus: (status) => {
        return instance.put(`/profile/status/`, {status: status})

    },
    updatePhoto: (file) => {
        const formData = new FormData;
        formData.append('image', file)
        return instance.put(`/profile/photo/`, formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    updateProfile: (profile) => {
        return instance.put(`/profile/`, profile)
    },


}
export const authMeAPI = {

    getAuthMe: () => {
        return instance.get(`auth/me`)
            .then((response) => {
                return response.data
            })
    },
    postAuthLogin: (object) => {
        return instance.post(`auth/login`, {...object})
            .then((response) => {
                return response.data

            })
    },
    deleteAuthLogin: () => {
        return instance.delete(`auth/login`)
            .then((response) => {
                return response.data
            })
    }
}
export const securityAPI = {
    getCaptcha: () => {
        return instance.post('/security/get-captcha-url')
            .then((response)=>{
                return response.data.url
            })
    }
}
