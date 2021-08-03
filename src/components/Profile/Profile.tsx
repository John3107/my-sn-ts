import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType} from "../../redux/state";


type ProfilePropsType = {
    profilePage: ProfilePageType
    newPostText: string
    dispatch: (action: ActionsType) => void
}

const Profile = (props: ProfilePropsType) => {
    return <div>
        <ProfileInfo/>
        <MyPosts profilePage={props.profilePage}
                 newPostText={props.newPostText}
                 dispatch={props.dispatch}
        />
    </div>
}

export default Profile;