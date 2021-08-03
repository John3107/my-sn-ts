import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
import {NavbarPageType} from '../../redux/state';
import React from "react";

type NavbarPropsType = {
    navbarPage: NavbarPageType
}

const Navbar = (props: NavbarPropsType) => {
    let friendsElements = props.navbarPage.friends.map(f => <Friends name={f.name} id={f.id}/>);

    return <nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
        </div>
        <div className={s.friends}>
            Friends
            {friendsElements}
        </div>
    </nav>
}

export default Navbar;