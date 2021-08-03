import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

export type DialogsItemType = {
    id: number
    name: string
}

const DialogItem = (props: DialogsItemType) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <img src={'https://www.film.ru/sites/default/files/filefield_paths/maxresdefault_1_24.jpg'}/>
        <NavLink className={s.NavLink} to={path}>{props.name}</NavLink>
    </div>
}


export default DialogItem;
