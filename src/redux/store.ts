import profileReducer, {
    addPostActionCreator,
    ProfileType,
    setUserProfile,
    updateNewPostTextActionCreator
} from "./profile-reduser";
import messagesReducer, {sendMessageCreator, updateNewMessageBodyCreator} from "./messages-reduser";
import navbarReducer from "./navbar-reduser";
import {
    follow, followSuccess,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching, toggleIsFollowingProgress,
    unfollow, unfollowSuccess,
} from "./users-reduser";

export let store: StoreType = {
    getState() {
        return this._state
    },
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: "It`s my first post", likesCount: 11},
                {id: 3, message: "Blabla", likesCount: 10},
                {id: 4, message: "Dada", likesCount: 15}
            ],
            newPostText: "",
            profile: null
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Dmitriy'},
                {id: 2, name: 'Ivan'},
                {id: 3, name: 'Michael'},
                {id: 4, name: 'Ann'},
                {id: 5, name: 'Alex'},
                {id: 6, name: 'Peter'},
            ],

            messages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo!'},
                {id: 4, message: 'Yo!'},
                {id: 5, message: 'Yo!'},
            ],
            newMessageBody: ""
        },
        navbarPage: {
            friends: [
                {id: 1, name: 'Dmitriy'},
                {id: 2, name: 'Ivan'},
                {id: 3, name: 'Michael'}
            ],
        }
    },
    _callSubscriber() {
        console.log("State was changed")
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._state.navbarPage = navbarReducer(this._state.navbarPage, action)

        this._callSubscriber(this._state)
    }
}

export type MessagesType = {
    id: number
    message: string
};
export type DialogsType = {
    id: number
    name: string
};

export type PostsType = {
    id: number
    message: string
    likesCount: number
};
export type MessagesPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string

};
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
   profile: ProfileType | null
};
export type NavbarPageType = {
    friends: Array<FriendsType>
};
export type FriendsType = {
    id: number
    name: string
};
export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    navbarPage: NavbarPageType
};

export type StoreType = {
    getState: () => StateType
    _state: StateType
    _callSubscriber: (_state?: StateType) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}
export type ActionsType = ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostTextActionCreator> |
    ReturnType<typeof sendMessageCreator> |
    ReturnType<typeof followSuccess> |
    ReturnType<typeof unfollowSuccess> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof updateNewMessageBodyCreator> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof toggleIsFetching> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof toggleIsFollowingProgress>



export default store;