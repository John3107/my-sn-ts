import React, {MouseEvent} from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator}
    from "../../../redux/profile-reduser";
import {StoreType}
    from "../../../redux/store";
import StoreContext from '../../../StoreContext';
import MyPosts from "./MyPosts";

/*type MyPostsContainerType = {
    store: StoreType
}*/


const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            { store => {
                let addPost = (e: MouseEvent<HTMLButtonElement>, text: string) => {
                    store.dispatch(addPostActionCreator(text))

                }
                let onPostChange = (text: string) => {
                    let action = updateNewPostTextActionCreator(text)
                    store.dispatch(action)
                }
                return <MyPosts updateNewPostText={onPostChange}
                                addPost={addPost}
                                posts={store.getState().profilePage.posts}
                                newPostText={store.getState().profilePage.newPostText}/>
            }
        }

        </StoreContext.Consumer>
    )
}
export default MyPostsContainer;


