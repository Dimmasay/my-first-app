import axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'
const baseKey = "b2f42c92-a12d-4024-aa96-79bbcb29ee47"


export const getUsersAPI = (count, page) => {
    return axios.get(`${baseUrl}users?count=${count}&page=${page}`, {
        withCredentials: true
    }).then((response)=>{
        return response.data
    })
}

export const followUserAPI = (userId) => {

    return axios.delete(`${baseUrl}follow/${userId}`, {
        withCredentials: true,
        headers: {
            "API-KEY": baseKey
        }
    }).then((response)=>{
        return response.data
    })
}

export const unFollowUserAPI = (userId) => {

    return axios.post(`${baseUrl}follow/${userId}`, {},{
        withCredentials: true,
        headers: {
            "API-KEY": baseKey
        }
    }).then((response)=>{
        return response.data
    })
}

export const getAuthMeAPI = ( ) => {
    return axios.get(`${baseUrl}auth/me`, {
        withCredentials: true})
        .then((response)=>{
            return response.data
        })
}
