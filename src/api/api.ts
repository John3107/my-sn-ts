import axios from "axios";


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
    getUnfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getFollow(userId: number) {
        return instance.post(`follow/${userId}`, {},)
            .then(response => {
                return response.data
            })
    },
    getProfile(userId: string) {
        return profileAPI.getProfile(userId)
    }

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`, {
            withCredentials: true
        })
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status})
    }
}