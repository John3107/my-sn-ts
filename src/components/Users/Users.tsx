import React from "react";
import s from './users.module.css'
import {UsersPropsType} from "./UsersContainer";


let Users = (props: UsersPropsType) => {
    if (props.usersPage.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoURL: 'https://bipbap.ru/wp-content/uploads/2018/02/1378847521_1806552374.jpg',
                followed: true,
                fullName: 'Peter',
                status: 'I am a Junior!',
                location: {country: 'Belarus', city: 'Minsk'}
            },
            {
                id: 2,
                photoURL: 'https://bipbap.ru/wp-content/uploads/2018/02/1378847521_1806552374.jpg',
                followed: false,
                fullName: 'Victor',
                status: 'I am a Middle!',
                location: {country: 'Russia', city: 'Moscow'}
            },
            {
                id: 3,
                photoURL: 'https://bipbap.ru/wp-content/uploads/2018/02/1378847521_1806552374.jpg',
                followed: false,
                fullName: 'Andrew',
                status: 'I am a Senior!',
                location: {country: 'Ukraine', city: 'Kiev'}
            },
        ])
    }
    return <div>
        {
            props.usersPage.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoURL} className={s.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        } }>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        } }>Follow</button>
                    }
                </div>
            </span>
                <span>
                  <span>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
            </span>
            <span>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
                   </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;