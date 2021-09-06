import React, {useEffect} from 'react';
import Profile from "../Profile";
import {connect} from "react-redux";
import axios from "axios";
import {ProfileType, setUserProfile} from "../../../redux/profile-reduser";
import {RouteComponentProps, withRouter } from 'react-router';
import {AppStateType} from "../../../redux/redux-store";
import {usersAPI} from "../../../api/api";

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType | null
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType | null) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnPropsType

function ProfileContainer(props: ProfileContainerPropsType) {

    useEffect(() => {
        let userId = props.match.params.userId;
        if(!userId) {
            userId = '2'
        }
        usersAPI.getProfile(userId).then((data) => {
                    props.setUserProfile(data);
            });
    }, [])


    return (
            <Profile profile={props.profile}/>
        )
    }

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})

export default connect (mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);