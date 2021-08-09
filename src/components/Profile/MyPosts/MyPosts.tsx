import React, {ChangeEvent, MouseEvent} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

import {PostsType} from "../../../redux/store";

type MyPostsPropsType = {
    updateNewPostText: (text: string) => void
    addPost: (e: MouseEvent<HTMLButtonElement>, text: string) => void
    posts: PostsType[]
    newPostText: string
}


const MyPosts = (props: MyPostsPropsType) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = (e: MouseEvent<HTMLButtonElement>, text?: string) => {
        props.addPost(e, text || '')
    }

    let onPostChange = () => {
        let text = newPostElement.current?.value || "";
        props.updateNewPostText(text);
    }

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement}
                          value={props.newPostText}/>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts;
