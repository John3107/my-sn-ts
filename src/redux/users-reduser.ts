import React from "react";
import {ActionsType} from "./store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'


/*
type LocationType = {
    country: string
    city: string
}
*/

type PhotosType = {
    small: string
    large: string
}

export type ItemsType = {
    id: number
    photoURL: string
    followed: boolean
    status: string
    // location: LocationType
    name: string
    photos: PhotosType
    totalCount: number
    error: string
}


export type InitialStateType = {
    users: ItemsType[]
}

let initialState: InitialStateType = {
    users: []
}


const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users ]}
        default:
            return state;
    }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: ItemsType[]) => ({type: SET_USERS, users} as const)

export default usersReducer;