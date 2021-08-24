import React from "react";
import s from './users.module.css'
import userPhoto from '../../assents/images/users.png';
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";


class Users extends React.Component<UsersPropsType> {
    componentDidMount() {

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then((response) => {
                this.props.setUsers(response.data.items)
            });
    }


    render() {
        return <div>
            {
                this.props.usersPage.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            this.props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            this.props.follow(u.id)
                        }}>Follow</button>
                    }
                </div>
            </span>
                    <span>
                  <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </span>
            <span>
                <div>{'u.location.country'}</div>
                <div>{'u.location.city'}</div>
                   </span>
                </span>
                </div>)
            }
        </div>
    }
}

export default Users;