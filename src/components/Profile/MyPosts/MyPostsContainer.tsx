import React, {MouseEvent} from 'react';
import {addPostActionCreator, PostsType, updateNewPostTextActionCreator}
    from "../../../redux/profile-reduser";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type mapStatePropsType = {
    newPostText: string
    posts: PostsType[]
}

type mapDispatchPropsType = {
    updateNewPostText: (text: string) => void
    addPost: (e: MouseEvent<HTMLButtonElement>, body: string) => void
}

let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return{
        updateNewPostText: (text: string) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action)
        },
       addPost: (e: MouseEvent<HTMLButtonElement>, body: string) => {
            dispatch(addPostActionCreator(body));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;


