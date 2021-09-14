import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profile-reduser";
import userPhoto from "../../../assents/images/users.png";


const ProfileInfo: React.FC<{profile: ProfileType | null}> = ({profile}) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large ? profile.photos.large : userPhoto}/>
                <div>{profile.fullName}</div>
                <div>{profile.aboutMe}</div>
                <div>{profile.lookingForAJob}</div>
                <div>{profile.lookingForAJobDescription}</div>
                <div>{profile.contacts.github}</div>
                <div>{profile.contacts.instagram}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;