import React from "react";
import s from './../Navbar.module.css';
type FriendsItemType = {
    id: number
    name: string
}

const Friends = (props: FriendsItemType) => {
    return <div className={s.itemFriends}>
        <img src={'https://www.film.ru/sites/default/files/filefield_paths/maxresdefault_1_24.jpg'}/>
        {props.name}
    </div>
}


export default Friends;