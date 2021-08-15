import {ActionsType} from "./store";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type PostsType = {
    id: number
    message: string
    likesCount: number
};

export type InitialStateType = {
    posts: Array<PostsType>
    newPostText: string
}

let initialState: InitialStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: "It`s my first post", likesCount: 11},
        {id: 3, message: "Blabla", likesCount: 10},
        {id: 4, message: "Dada", likesCount: 15}
    ],
    newPostText: ""
}


const profileReducer = ( state: InitialStateType = initialState,action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = (text: string) =>
    ({type: ADD_POST, newPostText: text} as const)


export const updateNewPostTextActionCreator = (text: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)

    export default profileReducer;