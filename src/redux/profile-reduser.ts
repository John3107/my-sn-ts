import {ActionsType} from "./store";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'

export type PostsType = {
    id: number
    message: string
    likesCount: number
};

export type ProfileType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}

export type InitialStateType = {
    posts: Array<PostsType>
    newPostText: string
    profile: ProfileType | null,
    status: string
}

let initialState: InitialStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: "It`s my first post", likesCount: 11},
        {id: 3, message: "Blabla", likesCount: 10},
        {id: 4, message: "Dada", likesCount: 15}
    ],
    newPostText: "",
    profile: null,
    status: '',
}


const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        default:
            return state;
    }
}

export const addPostActionCreator = (text: string) =>
    ({type: ADD_POST, newPostText: text} as const)
export const updateNewPostTextActionCreator = (text: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)
export const setUserProfile = (profile: ProfileType | null) =>
    ({type: SET_USER_PROFILE, profile} as const)
export const setStatus = (status: string) =>
    ({type: SET_STATUS, status} as const)


export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId).then((res) => {
        dispatch(setUserProfile(res.data));
    })
}

export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then((res) => {
            dispatch(setStatus(res.data));
        })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
}

export default profileReducer;