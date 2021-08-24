import React from "react";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reduser";
import {connect} from "react-redux";
import Users from "./Users";
import {InitialStateType, ItemsType} from "../../redux/users-reduser";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    usersPage: InitialStateType
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: ItemsType[]) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },

        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },

        setUsers: (users: ItemsType[]) => {
            dispatch(setUsersAC(users))
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);