import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reduser";


const Profile: React.FC<{profile: ProfileType | null}> = ({profile}) => {
    return <div>
        <ProfileInfo profile={profile}/>
        <MyPostsContainer />
    </div>
}

export default Profile;