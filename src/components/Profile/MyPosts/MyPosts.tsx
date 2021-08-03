import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator}
    from "../../../redux/profile-reduser";
import {ActionsType, ProfilePageType}
    from "../../../redux/state";

type MyPostsPropsType = {
    profilePage: ProfilePageType
    newPostText: string
    dispatch: (action: ActionsType) => void
}



const MyPosts = (props: MyPostsPropsType) => {


    let postsElements =
        props.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        let text = newPostElement.current?.value || "";
        if (text) {
            let action = addPostActionCreator(text)
            props.dispatch(action);
        }
    }

    let onPostChange = () => {
    let text = newPostElement.current?.value || "";
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
    }

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement}
                value={props.newPostText} />
            </div>
            <div>
                <button onClick={ addPost }>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts;
