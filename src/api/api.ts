import axios from "axios";
import {ItemsType} from "../redux/users-reduser";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': "0b13c844-c851-4419-8d36-a8a6a7b220f1"
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    getUnfollow(u: ItemsType ) {
        return instance.delete(`follow/${u.id}`)
            .then(response => {
                return response.data
            })
    },
    getFollow(u: ItemsType ) {
        return instance.post(`follow/${u.id}`, {},)
            .then(response => {
                return response.data
            })
    },
    getProfile(userId: string) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data
            })
    }

}
