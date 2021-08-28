import React, {useEffect} from 'react';
import Profile from "../Profile";
import {connect} from "react-redux";
import axios from "axios";
import {ProfileType, setUserProfile} from "../../../redux/profile-reduser";
import {RouteComponentProps, withRouter } from 'react-router';
import {AppStateType} from "../../../redux/redux-store";

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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then((response) => {
                    props.setUserProfile(response.data);
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