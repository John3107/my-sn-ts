import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
import React from "react";
import StoreContext from '../../StoreContext';

const Navbar = (props: any) => {
    return <StoreContext.Consumer>
        {store => {
            let friendsElements = store.getState().navbarPage.friends.map(f =>
                <Friends name={f.name} id={f.id}/>);
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
        }
    </StoreContext.Consumer>
}
export default Navbar;